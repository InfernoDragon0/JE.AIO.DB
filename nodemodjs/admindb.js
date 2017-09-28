
const bt = require('./braintreeApiCall.js')
const api = require('./databaseApiCall.js')
const email = require('./emailer.js')
const databaseReader = require('./DatabaseReader.js')


module.exports.FullRefund = FullRefund;
module.exports.InsertSettlementRecord = InsertSettlementRecord;
module.exports.InsertChargeback = InsertChargeback;

// refund full transaction

function FullRefund(transactionId) {
    return new Promise((resolve, reject) => {
        var promiseRetrieveIdTransaction = api.retrieveIdTransaction(transactionId); // check if the transaction can be refunded in our database
        promiseRetrieveIdTransaction.then((value) => {
            if (value.statusCode >= 200 && value.statusCode <= 299) {
                if (value.body.transaction_type == 1 && value.body.is_transaction_complete == false) {
                    var brainId = value.body.braintree_transaction_id;
                    var userId = value.body.fk_user_id;
                    var merchantId = value.body.fk_merchant_id;
                    var branchId = value.body.fk_branch_id;
                    console.log(brainId)
                    var promiseBtRefund = bt.btRefund(brainId); // refund braintree transaction
                    promiseBtRefund.then((value) => {
                        if (value.success == true) {
                            var promiseBtSearch = bt.btSearch(brainId); // search braintree for refund transaction
                            promiseBtSearch.then((value) => {
                                if (!value) {
                                    resolve(-1)
                                } else if (value.status == 'submitted_for_settlement'){
                                    console.log('Braintree payment is not complete')
                                    resolve(-1)
                                    }else {
                                    var promiseCreateTransaction = api.createTransactionCreditRefund(userId, merchantId, branchId, value.refundId, value.amount) // add refund transaction to our database
                                    promiseCreateTransaction.then((value) => {
                                        var promiseConfirmTransaction = api.confirmTransaction(transactionId);
                                        promiseConfirmTransaction.then((value2) => {
                                            // resolve(IdsNotUsable)
                                        })
                                    })
                                }
                            })
                        } else if (value.success == false) {
                            // console.log(value.message)
                            resolve(value.message);
                        }
                    });

                }else {
                    resolve(-1) // can be resolved as something else
                }
            } else {
                resolve(value);
            }
        })
    })
};

// insert settlement record for transactions about to be settled
function InsertSettlementRecord(transactionID) {
    return new Promise((resolve, reject) => {
  var unsplit = transactionID
  var splitID = unsplit.split(",")
  var newArray = []
  for (var counter = 0; counter < splitID.length - 1; counter++) {
    newArray.push(splitID[counter])
  }
  InsertSettlement(newArray)
  resolve('success')
    })
}
function InsertSettlement(Ids) {
  return new Promise((resolve, reject) => {
    var arrayOfBranch = []
    var stopper = 0
    for (var h = 0; h < Ids.length; h++) {
      var promiseRetrieveIdTransaction = api.retrieveIdTransaction(Ids[h])
      promiseRetrieveIdTransaction.then((value) => {
        arrayOfBranch.push(value.body.fk_branch_id)
      })
    }
    var promiseRetrieveSettlements = api.retrieveSettlements(); // check if transaction has been settled
    promiseRetrieveSettlements.then((value) => {
      var IdsNotUsable = []
      for (var e = 0; e < Ids.length; e++) {
        for (var t = 0; t < value.body.length; t++) {
          if (value.body[t].fk_transaction_id == Ids[e]) {
            IdsNotUsable.push(Ids[t])
          }
        }
      }
      if (IdsNotUsable.length == 0) {
        var promiseRetrieveTransactions = api.retrieveTransactions(); // search for transaction detail from our transaction database
        promiseRetrieveTransactions.then((value2) => {
          var money = 0
          for (var r = 0; r < Ids.length; r++) {
            for (var u = 0; u < value2.body.length; u++) {
              if (value2.body[u].transaction_id == Ids[r]) {
                var money = money + parseInt(commission(value2.body[u].transaction_amount))
                var merchantId = value2.body[u].fk_merchant_id
              }
            }
          }
          var unique = arrayOfBranch.filter(function (item, i, ar) { return ar.indexOf(item) === i });
          var promiseCreateSettlement = api.createSettlement(merchantId, unique.toString(), Ids.toString(), money); // create settlement record
          email.sendSettlementEmail(merchantId,money,'123')
          promiseCreateSettlement.then((value3) => {
            for (var y = 0; y < Ids.length; y++) {
              var promiseConfirmTransaction = api.confirmTransaction(Ids[y]);
              promiseConfirmTransaction.then((value4) => {
                // resolve(IdsNotUsable)
                console.log("Settlment Completed - final")
                setTimeout(function() {
                    databaseReader.readData()
                    console.log('Reloading Data x2');
                }, 3000);
              })
            }
          })
        })
      }
    })
  }) // close promise
};

function commission(value) {
  var newCommission = (value * 0.975) - 0.50
  return newCommission;
};

// InsertChargeback('1f55f5c1-45b2-4196-b425-08d5041e93d1')

function InsertChargeback(transactionId) {
    new Promise((resolve, reject) => {
        var promiseRetrieveIdTransaction = api.retrieveIdTransaction(transactionId);
        promiseRetrieveIdTransaction.then((value) => {
            if (value.statusCode >= 200 && value.statusCode <= 299) {
                if (value.body.transaction_type == 1) {
                 
                    var promiseCreateTransaction = api.createTransactionCreditChargeback(value.body.fk_user_id,value.body.fk_merchant_id, value.body.fk_branch_id, value.body.braintree_transaction_id,value.body.transaction_amount);
                    promiseCreateTransaction.then((value) => {
                        if (value.statusCode >= 200 && value.statusCode <= 299) {
                            var promiseConfirmTransaction = api.confirmTransaction(transactionId);
                            promiseConfirmTransaction.then((value)=>{
                            })
                        } else {
                            resolve(-1)
                        }
                    })
                } else {
                    resolve(-1)
                }
            } else {
                resolve(value);
            }
        })
    })// close promise
};

/* |||||   ||| /|||||||||\ /|||||||||\  |||    ||| /||||||| ||||||||| */
/* ||||||  ||| |||     |||     |||      |||    ||| |||      |||       */
/* ||| ||| ||| |||     |||     |||      |||    ||| |||||||| ||||||||| */
/* |||  |||||| |||     |||     |||      |||    |||      ||| |||       */
/* |||    |||| \|||||||||/     |||      \||||||||/ |||||||/ ||||||||| */

// module.exports.GetMerchantSuccess = GetMerchantSuccess;
// module.exports.GetMerchantCompleted = GetMerchantCompleted;


// /*TEST:*/ GetMerchantSuccess('1/1/2017', '21/9/2017', 10) //

function GetMerchantSuccess(date1, date2, merchantId) {
    return new Promise((resolve, reject) => {
        var dateStart = new Date(date1)
        dateStart = dateStart.getTime();
        var dateEnd = new Date(date2)
        dateEnd = dateEnd.getTime();
        var dateNow = new Date()
        dateNow = dateNow.getTime();
        if(dateEnd > dateNow){
            console.log('Get Credit Card Payment: End date is more than current date')
            resolve(-1)
            return;
        }

        var promiseRetrieveTransactions = api.retrieveTransactions();
        promiseRetrieveTransactions.then((value) => {
            if (value.statusCode >= 200 && value.statusCode <= 299) {
                var money = 0;
                for (var i = 0; i < value.body.length; i++) {
                    var createTime = new Date(value.body[i].created_at)
                    createTime = createTime.getTime();
                    if (createTime >= dateStart && createTime <= dateEnd && value.body[i].is_transaction_complete == false && value.body[i].fk_merchant_id == merchantId) { // convert date to epoch time
                        money = money + value.body[i].transaction_amount
                    }
                }
                resolve(money);
            } else {
                resolve(value);
            }
        })
    }) // close promise
}


// /*TEST:*/ GetMerchantCompleted 

function GetMerchantCompleted(date1, date2, merchantId) { // month - day - year
    return new Promise((resolve, reject) => {
                var dateStart = new Date(date1)
                dateStart = dateStart.getTime();
                var dateEnd = new Date(date2)
                dateEnd = dateEnd.getTime();
                var dateNow = new Date()
                dateNow = dateNow.getTime();
                if(dateEnd > dateNow){
                    console.log('Get Credit Card Payment: End date is more than current date')
                    resolve(-1)
                    return;
                }
        
                var promiseRetrieveTransactions = api.retrieveTransactions();
                promiseRetrieveTransactions.then((value) => {
                    if (value.statusCode >= 200 && value.statusCode <= 299) {
                        var money = 0;
                        for (var i = 0; i < value.body.length; i++) {
                            var createTime = new Date(value.body[i].created_at)
                            createTime = createTime.getTime();
                            if (createTime >= dateStart && createTime <= dateEnd && value.body[i].is_transaction_complete == true && value.body[i].fk_merchant_id == merchantId) { // convert date to epoch time
                                money = money + value.body[i].transaction_amount
                            }
                        }
                        resolve(money);
                    } else {
                        resolve(value);
                    }
                })
            }) // close promise
}

