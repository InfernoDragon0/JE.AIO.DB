
var bt = require('./braintreeApiCall.js')
var api = require('./databaseApiCall.js')

// refund full transaction

module.exports.FullRefund = FullRefund;

// /*TEST:*/ FullRefund('34b91928-0c1b-4572-b423-08d5041e93d1')

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

                    var promiseBtRefund = bt.btRefund(brainId); // refund braintree transaction

                    promiseBtRefund.then((value) => {
                        if (value.success == true) {
                            console.log("Successfully refunded in braintree\n")
                            var promiseBtSearch = bt.btSearch(brainId); // search braintree for refund transaction

                            promiseBtSearch.then((value) => {
                                console.log(value)
                                if (!value) {
                                    resolve(-1)
                                } else {
                                    console.log("search refundId from bt transaction \n")

                                    var promiseCreateTransaction = api.createTransactionCreditRefund(userId, merchantId, branchId, value.refundId, value.amount) // add refund transaction to our database

                                    promiseCreateTransaction.then((value) => {

                                        // console.log(value.body)
                                        var promiseConfirmTransaction = api.confirmTransaction(transactionId);
                                        promiseConfirmTransaction.then((value2) => {
                                            // resolve(IdsNotUsable)
                                        })

                                    })
                                }

                            })

                        } else if (value.success == false) {
                            console.log(value.message)
                            resolve(value.message);
                        }
                    });

                }else {
                    console.log("transaction already refunded or cannot be refunded")// either refunded, chargeback, or already completed -- if so, chargeback
                    resolve(-1) // can be resolved as something else
                }
            } else {
                resolve(value);
            }
        })
    })
};



// insert settlement record for transactions about to be settled

module.exports.InsertSettlementRecord = InsertSettlementRecord

function InsertSettlementRecord(transactionID) {
  var unsplit = transactionID
  var splitID = unsplit.split(",")
  console.log(unsplit)
  var newArray = []
  for (var counter = 0; counter < splitID.length - 1; counter++) {
    // console.log("IDs send to settlement : " + splitID[counter])
    newArray.push(splitID[counter])
    // adminFunctions.InsertSettlement(splitID[counter]) /// UNCHECK THIS AND WE ARE DONE
  }
  console.log("here" + newArray)
  InsertSettlement(newArray)
  // console.log("it worked")

}

function InsertSettlement(Ids) {
  return new Promise((resolve, reject) => {
    var arrayOfBranch = []
    var stopper = 0

    for (var h = 0; h < Ids.length; h++) {
      var promiseRetrieveIdTransaction = dbAPI.retrieveIdTransaction(Ids[h])
      promiseRetrieveIdTransaction.then((value) => {

        // console.log(value[0].body)
        arrayOfBranch.push(value.body.fk_branch_id)


        // console.log("fk"+value.body.fk_branch_id)

      })
    }
    // console.log(arrayOfBranch)


    // for ( var counter = 0 ; counter < Ids.length ; counter ++ ){
    //   var newpromise = dbAPI.retrieveIdTransaction(Ids[counter])
    //   newpromise.then((result)=>{
    //     // console.log("here")
    //     // console.log(result.body.fk_branch_id)
    //         // console.log("haha2"+result.body.fk_branch_id)
    //         // console.log(arrayOfBranch.length)
    //         stopper ++
    //         if(stopper === result.length){

    //         arrayOfBranch.push(result.body.fk_branch_id)
    //         // stopper++
    //         }
    //     // for (var counter2 = 0 ; counter2 < arrayOfBranch.length;counter2++){
    //     //   if(result.body.fk_branch_id != arrayOfBranch[counter2]){
    //     //     // console.log("haha"+result.body.fk_branch_id)
    //     //   }
    //     // }

    //   })


    // } 

    var promiseRetrieveSettlements = dbAPI.retrieveSettlements(); // check if transaction has been settled
    promiseRetrieveSettlements.then((value) => {
      var IdsNotUsable = []

      console.log(Ids.length)
      for (var e = 0; e < Ids.length; e++) {
        for (var t = 0; t < value.body.length; t++) {
          if (value.body[t].fk_transaction_id == Ids[e]) {
            IdsNotUsable.push(Ids[t])
          }
        }
      }
      console.log(IdsNotUsable.length)

      if (IdsNotUsable.length == 0) {
        var promiseRetrieveTransactions = dbAPI.retrieveTransactions(); // search for transaction detail from our transaction database
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
          // console.log(money)
          // console.log("here")
          var unique = arrayOfBranch.filter(function (item, i, ar) { return ar.indexOf(item) === i });
          // console.log('test' + unique)
          // console.log(arrayOfBranch)
          var promiseCreateSettlement = dbAPI.createSettlement(merchantId, unique.toString(), Ids.toString(), money); // create settlement record
          promiseCreateSettlement.then((value3) => {
            // console.log("createSettlement :" + JSON.stringify(value2))
            for (var y = 0; y < Ids.length; y++) {
              var promiseConfirmTransaction = dbAPI.confirmTransaction(Ids[y]);
              promiseConfirmTransaction.then((value4) => {
                console.log("confirm :" + Ids[y])
                resolve(IdsNotUsable)
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

  // console.log(newValue);
  return newCommission;
};

module.exports.InsertChargeback = InsertChargeback;

// /*TEST:*/ InsertChargeback('434f0e89-3a8d-4622-ff0b-08d5042a0b34')

function InsertChargeback(transactionId) {
    new Promise((resolve, reject) => {

        var promiseRetrieveIdTransaction = api.retrieveIdTransaction(transactionId);

        promiseRetrieveIdTransaction.then((value) => {
            if (value.statusCode >= 200 && value.statusCode <= 299) {

                if (value.body.transaction_type == 1) {
                    console.log('Insert Chargeback: Transaction can be chargedback')

                    var promiseCreateTransaction = api.createTransactionCreditChargeback(value.body.fk_merchant_id, value.body.fk_branch_id, value.body.transactionId, -value.body.transaction_amount);
                    promiseCreateTransaction.then((value) => {
                        if (value.statusCode >= 200 && value.statusCode <= 299) {
                            // resolve(value)
                            var promiseConfirmTransaction = api.confirmTransaction(transactionId);
                            promiseConfirmTransaction.then((value)=>{
                                console.log('Insert Chargeback: Successful')
                            })
                        } else {
                            console.log('Insert Chargeback: Not properly connected to database')
                            resolve(-1)
                        }
                    })

                } else {
                    console.log('Insert Chargeback: Transaction cannot be chargebacked')
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

