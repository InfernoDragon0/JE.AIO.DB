const dbAPI = require("./databaseApiCallp2.js")
module.exports.ATransactiondata = ATransactiondata;
module.exports.Mchartdata = Mchartdata;
module.exports.STdataGen=STdataGen;
module.exports.STdata=STdata;
var ATransactiondata
var Mchartdata;
// retrieve transaction data from DB for adminDB
// var opendata = dbAPI.retrieveTransactions()
// opendata.then((value) => {
//   // ATransactiondata = value
//   console.log(value.length)
//   console.log(value[0].created_at)
//   formatData(value, 2017)
// })

// generate data for Settling Transaction table



var STdata = {
  "body": [{
      "merchant_id": 4,
      "merchant_name": 'da pian',
      "settlement_amount": 223,
      "transaction_ids": [5, 3]
    },
    {
      "merchant_id": 5,
      "merchant_name": 'da pian',
      "settlement_amount": 421,
      "transaction_ids": [6, 2]
    },
    {
      "merchant_id": 3,
      "merchant_name": 'da pian',
      "settlement_amount": -100,
      "transaction_ids": [1]
    }
  ]
}

function STdataGen(input){
  return STdata
}

// console.log(STdata.body[1])


module.exports.tester = tester

function tester(transactionID) {
  // console.log("YAY :"+transactionID)
  console.log("test :" + transactionID)
}

module.exports.tIDSpliter = tIDSpliter
function tIDSpliter(transactionID){
var unsplit = transactionID
var split = unsplit.split(",")
console.log(split)
}





















// formate data for chart
function formatData(data, year) {
  // checking
  // jan
  // feb
  // mar
  // apr
  // may
  // jun
  // jul
  // aug
  // sep
  // oct
  // nov
  // dec

  // January
  var janWeek1Orders = 0
  var janWeek2Orders = 0
  var janWeek3Orders = 0
  var janWeek4Orders = 0
  var janWeek1Income = 0
  var janWeek2Income = 0
  var janWeek3Income = 0
  var janWeek4Income = 0
  var janWk1S = "2017-01-01T00:00:00.00000"
  var janWk1E = "2017-01-07T23:59:59.999999"
  var janWk2S = "2017-01-08T00:00:00.00000"
  var janWk2E = "2017-01-14T23:59:59.999999"
  var janWk3S = "2017-01-15T00:00:00.00000"
  var janWk3E = "2017-01-21T23:59:59.999999"
  var janWk4S = "2017-01-22T00:00:00.00000"
  var janWk4E = "2017-01-31T23:59:59.999999"
  // feb
  var febWeek1Orders = 0
  var febWeek2Orders = 0
  var febWeek3Orders = 0
  var febWeek4Orders = 0
  var febWeek1Income = 0
  var febWeek2Income = 0
  var febWeek3Income = 0
  var febWeek4Income = 0
  var febWk1S = "2017-02-01T00:00:00.00000"
  var febWk1E = "2017-02-07T23:59:59.999999"
  var febWk2S = "2017-02-08T00:00:00.00000"
  var febWk2E = "2017-02-14T23:59:59.999999"
  var febWk3S = "2017-02-15T00:00:00.00000"
  var febWk3E = "2017-02-21T23:59:59.999999"
  var febWk4S = "2017-02-22T00:00:00.00000"
  var febWk4E = "2017-02-29T23:59:59.999999"
  // mar
  var marWeek1Orders = 0
  var marWeek2Orders = 0
  var marWeek3Orders = 0
  var marWeek4Orders = 0
  var marWeek1Income = 0
  var marWeek2Income = 0
  var marWeek3Income = 0
  var marWeek4Income = 0
  var marWk1S = "2017-03-01T00:00:00.00000"
  var marWk1E = "2017-03-07T23:59:59.999999"
  var marWk2S = "2017-03-08T00:00:00.00000"
  var marWk2E = "2017-03-14T23:59:59.999999"
  var marWk3S = "2017-03-15T00:00:00.00000"
  var marWk3E = "2017-03-21T23:59:59.999999"
  var marWk4S = "2017-03-22T00:00:00.00000"
  var marWk4E = "2017-03-31T23:59:59.999999"
  // apr
  var aprWeek1Orders = 0
  var aprWeek2Orders = 0
  var aprWeek3Orders = 0
  var aprWeek4Orders = 0
  var aprWeek1Income = 0
  var aprWeek2Income = 0
  var aprWeek3Income = 0
  var aprWeek4Income = 0
  var aprWk1S = "2017-04-01T00:00:00.00000"
  var aprWk1E = "2017-04-07T23:59:59.999999"
  var aprWk2S = "2017-04-08T00:00:00.00000"
  var aprWk2E = "2017-04-14T23:59:59.999999"
  var aprWk3S = "2017-04-15T00:00:00.00000"
  var aprWk3E = "2017-04-21T23:59:59.999999"
  var aprWk4S = "2017-04-22T00:00:00.00000"
  var aprWk4E = "2017-04-30T23:59:59.999999"
  // may
  var mayWeek1Orders = 0
  var mayWeek2Orders = 0
  var mayWeek3Orders = 0
  var mayWeek4Orders = 0
  var mayWeek1Income = 0
  var mayWeek2Income = 0
  var mayWeek3Income = 0
  var mayWeek4Income = 0
  var mayWk1S = "2017-05-01T00:00:00.00000"
  var mayWk1E = "2017-05-07T23:59:59.999999"
  var mayWk2S = "2017-05-08T00:00:00.00000"
  var mayWk2E = "2017-05-14T23:59:59.999999"
  var mayWk3S = "2017-05-15T00:00:00.00000"
  var mayWk3E = "2017-05-21T23:59:59.999999"
  var mayWk4S = "2017-05-22T00:00:00.00000"
  var mayWk4E = "2017-05-31T23:59:59.999999"
  // jun
  var junWeek1Orders = 0
  var junWeek2Orders = 0
  var junWeek3Orders = 0
  var junWeek4Orders = 0
  var junWeek1Income = 0
  var junWeek2Income = 0
  var junWeek3Income = 0
  var junWeek4Income = 0
  var junWk1S = "2017-06-01T00:00:00.00000"
  var junWk1E = "2017-06-07T23:59:59.999999"
  var junWk2S = "2017-06-08T00:00:00.00000"
  var junWk2E = "2017-06-14T23:59:59.999999"
  var junWk3S = "2017-06-15T00:00:00.00000"
  var junWk3E = "2017-06-21T23:59:59.999999"
  var junWk4S = "2017-06-22T00:00:00.00000"
  var junWk4E = "2017-06-30T23:59:59.999999"
  // jul
  var julWeek1Orders = 0
  var julWeek2Orders = 0
  var julWeek3Orders = 0
  var julWeek4Orders = 0
  var julWeek1Income = 0
  var julWeek2Income = 0
  var julWeek3Income = 0
  var julWeek4Income = 0
  var julWk1S = "2017-07-01T00:00:00.00000"
  var julWk1E = "2017-07-07T23:59:59.999999"
  var julWk2S = "2017-07-08T00:00:00.00000"
  var julWk2E = "2017-07-14T23:59:59.999999"
  var julWk3S = "2017-07-15T00:00:00.00000"
  var julWk3E = "2017-07-21T23:59:59.999999"
  var julWk4S = "2017-07-22T00:00:00.00000"
  var julWk4E = "2017-07-31T23:59:59.999999"
  // aug
  var augWeek1Orders = 0
  var augWeek2Orders = 0
  var augWeek3Orders = 0
  var augWeek4Orders = 0
  var augWeek1Income = 0
  var augWeek2Income = 0
  var augWeek3Income = 0
  var augWeek4Income = 0
  var augWk1S = "2017-08-01T00:00:00.00000"
  var augWk1E = "2017-08-07T23:59:59.999999"
  var augWk2S = "2017-08-08T00:00:00.00000"
  var augWk2E = "2017-08-14T23:59:59.999999"
  var augWk3S = "2017-08-15T00:00:00.00000"
  var augWk3E = "2017-08-21T23:59:59.999999"
  var augWk4S = "2017-08-22T00:00:00.00000"
  var augWk4E = "2017-08-31T23:59:59.999999"
  // sep
  var sepWeek1Orders = 0
  var sepWeek2Orders = 0
  var sepWeek3Orders = 0
  var sepWeek4Orders = 0
  var sepWeek1Income = 0
  var sepWeek2Income = 0
  var sepWeek3Income = 0
  var sepWeek4Income = 0
  var sepWk1S = "2017-09-01T00:00:00.00000"
  var sepWk1E = "2017-09-07T23:59:59.999999"
  var sepWk2S = "2017-09-08T00:00:00.00000"
  var sepWk2E = "2017-09-14T23:59:59.999999"
  var sepWk3S = "2017-09-15T00:00:00.00000"
  var sepWk3E = "2017-09-21T23:59:59.999999"
  var sepWk4S = "2017-09-22T00:00:00.00000"
  var sepWk4E = "2017-09-30T23:59:59.999999"
  //oct
  var octWeek1Orders = 0
  var octWeek2Orders = 0
  var octWeek3Orders = 0
  var octWeek4Orders = 0
  var octWeek1Income = 0
  var octWeek2Income = 0
  var octWeek3Income = 0
  var octWeek4Income = 0
  var octWk1S = "2017-10-01T00:00:00.00000"
  var octWk1E = "2017-10-07T23:59:59.999999"
  var octWk2S = "2017-10-08T00:00:00.00000"
  var octWk2E = "2017-10-14T23:59:59.999999"
  var octWk3S = "2017-10-15T00:00:00.00000"
  var octWk3E = "2017-10-21T23:59:59.999999"
  var octWk4S = "2017-10-22T00:00:00.00000"
  var octWk4E = "2017-10-31T23:59:59.999999"
  // nov
  var novWeek1Orders = 0
  var novWeek2Orders = 0
  var novWeek3Orders = 0
  var novWeek4Orders = 0
  var novWeek1Income = 0
  var novWeek2Income = 0
  var novWeek3Income = 0
  var novWeek4Income = 0
  var novWk1S = "2017-11-01T00:00:00.00000"
  var novWk1E = "2017-11-07T23:59:59.999999"
  var novWk2S = "2017-11-08T00:00:00.00000"
  var novWk2E = "2017-11-14T23:59:59.999999"
  var novWk3S = "2017-11-15T00:00:00.00000"
  var novWk3E = "2017-11-21T23:59:59.999999"
  var novWk4S = "2017-11-22T00:00:00.00000"
  var novWk4E = "2017-11-30T23:59:59.999999"
  // dec
  var decWeek1Orders = 0
  var decWeek2Orders = 0
  var decWeek3Orders = 0
  var decWeek4Orders = 0
  var decWeek1Income = 0
  var decWeek2Income = 0
  var decWeek3Income = 0
  var decWeek4Income = 0
  var decWk1S = "2017-12-01T00:00:00.00000"
  var decWk1E = "2017-12-07T23:59:59.999999"
  var decWk2S = "2017-12-08T00:00:00.00000"
  var decWk2E = "2017-12-14T23:59:59.999999"
  var decWk3S = "2017-12-15T00:00:00.00000"
  var decWk3E = "2017-12-21T23:59:59.999999"
  var decWk4S = "2017-12-22T00:00:00.00000"
  var decWk4E = "2017-12-31T23:59:59.999999"

  for (var counter = 0; counter < data.length; counter++) {
    // January
    //JanWeek1
    if (data[counter].created_at > janWk1S && data[counter].created_at < janWk1E) {
      janWeek1Orders = janWeek1Orders + 1
      janWeek1Income = janWeek1Income + data[counter].transaction_amount
    }
    //JanWeek2
    else if (data[counter].created_at > janWk2S && data[counter].created_at < janWk2E) {
      janWeek2Orders = janWeek2Orders + 1
      janWeek2Income = janWeek2Income + data[counter].transaction_amount
    }
    //JanWeek3
    else if (data[counter].created_at > janWk3S && data[counter].created_at < janWk3E) {
      janWeek3Orders = janWeek3Orders + 1
      janWeek3Income = janWeek3Income + data[counter].transaction_amount
    }
    //JanWeek4
    else if (data[counter].created_at > janWk4S && data[counter].created_at < janWk4E) {
      janWeek4Orders = janWeek4Orders + 1
      janWeek4Income = janWeek4Income + data[counter].transaction_amount
    }
    // Feburary
    //FebWeek1
    else if (data[counter].created_at > febWk1S && data[counter].created_at < febWk1E) {
      febWeek1Orders = febWeek1Orders + 1
      febWeek1Income = febWeek1Income + data[counter].transaction_amount
    }
    //FebWeek2
    else if (data[counter].created_at > febWk2S && data[counter].created_at < febWk2E) {
      febWeek2Orders = febWeek2Orders + 1
      febWeek2Income = febWeek2Income + data[counter].transaction_amount
    }
    //FebWeek3
    else if (data[counter].created_at > febWk3S && data[counter].created_at < febWk3E) {
      febWeek3Orders = febWeek3Orders + 1
      febWeek3Income = febWeek3Income + data[counter].transaction_amount
    }
    //FebWeek4
    else if (data[counter].created_at > febWk4S && data[counter].created_at < febWk4E) {
      febWeek4Orders = febWeek4Orders + 1
      febWeek4Income = febWeek4Income + data[counter].transaction_amount
    }
    // March
    //marWeek1
    else if (data[counter].created_at > marWk1S && data[counter].created_at < marWk1E) {
      marWeek1Orders = marWeek1Orders + 1
      marWeek1Income = marWeek1Income + data[counter].transaction_amount
    }
    //marWeek2
    else if (data[counter].created_at > marWk2S && data[counter].created_at < marWk2E) {
      marWeek2Orders = marWeek2Orders + 1
      marWeek2Income = marWeek2Income + data[counter].transaction_amount
    }
    //marWeek3
    else if (data[counter].created_at > marWk3S && data[counter].created_at < marWk3E) {
      marWeek3Orders = marWeek3Orders + 1
      marWeek3Income = marWeek3Income + data[counter].transaction_amount
    }
    //marWeek4
    else if (data[counter].created_at > marWk4S && data[counter].created_at < marWk4E) {
      marWeek4Orders = marWeek4Orders + 1
      marWeek4Income = marWeek4Income + data[counter].transaction_amount
    }
    // April
    //aprWeek1
    else if (data[counter].created_at > aprWk1S && data[counter].created_at < aprWk1E) {
      aprWeek1Orders = aprWeek1Orders + 1
      aprWeek1Income = aprWeek1Income + data[counter].transaction_amount
    }
    //aprWeek2
    else if (data[counter].created_at > aprWk2S && data[counter].created_at < aprWk2E) {
      aprWeek2Orders = aprWeek2Orders + 1
      aprWeek2Income = aprWeek2Income + data[counter].transaction_amount
    }
    //aprWeek3
    else if (data[counter].created_at > aprWk3S && data[counter].created_at < aprWk3E) {
      aprWeek3Orders = aprWeek3Orders + 1
      aprWeek3Income = aprWeek3Income + data[counter].transaction_amount
    }
    //aprWeek4
    else if (data[counter].created_at > aprWk4S && data[counter].created_at < aprWk4E) {
      aprWeek4Orders = aprWeek4Orders + 1
      aprWeek4Income = aprWeek4Income + data[counter].transaction_amount
    }
    // May may
    //mayWeek1
    else if (data[counter].created_at > mayWk1S && data[counter].created_at < mayWk1E) {
      mayWeek1Orders = mayWeek1Orders + 1
      mayWeek1Income = mayWeek1Income + data[counter].transaction_amount
    }
    //mayWeek2
    else if (data[counter].created_at > mayWk2S && data[counter].created_at < mayWk2E) {
      mayWeek2Orders = mayWeek2Orders + 1
      mayWeek2Income = mayWeek2Income + data[counter].transaction_amount
    }
    //mayWeek3
    else if (data[counter].created_at > mayWk3S && data[counter].created_at < mayWk3E) {
      mayWeek3Orders = mayWeek3Orders + 1
      mayWeek3Income = mayWeek3Income + data[counter].transaction_amount
    }
    //mayWeek4
    else if (data[counter].created_at > mayWk4S && data[counter].created_at < mayWk4E) {
      mayWeek4Orders = mayWeek4Orders + 1
      mayWeek4Income = mayWeek4Income + data[counter].transaction_amount
    }
    // June jun
    //junWeek1
    else if (data[counter].created_at > junWk1S && data[counter].created_at < junWk1E) {
      junWeek1Orders = junWeek1Orders + 1
      junWeek1Income = junWeek1Income + data[counter].transaction_amount
    }
    //junWeek2
    else if (data[counter].created_at > junWk2S && data[counter].created_at < junWk2E) {
      junWeek2Orders = junWeek2Orders + 1
      junWeek2Income = junWeek2Income + data[counter].transaction_amount
    }
    //junWeek3
    else if (data[counter].created_at > junWk3S && data[counter].created_at < junWk3E) {
      junWeek3Orders = junWeek3Orders + 1
      junWeek3Income = junWeek3Income + data[counter].transaction_amount
    }
    //junWeek4
    else if (data[counter].created_at > junWk4S && data[counter].created_at < junWk4E) {
      junWeek4Orders = junWeek4Orders + 1
      junWeek4Income = junWeek4Income + data[counter].transaction_amount
    }
    // July jul
    //julWeek1
    else if (data[counter].created_at > julWk1S && data[counter].created_at < julWk1E) {
      julWeek1Orders = julWeek1Orders + 1
      julWeek1Income = julWeek1Income + data[counter].transaction_amount
    }
    //julWeek2
    else if (data[counter].created_at > julWk2S && data[counter].created_at < julWk2E) {
      julWeek2Orders = julWeek2Orders + 1
      julWeek2Income = julWeek2Income + data[counter].transaction_amount
    }
    //julWeek3
    else if (data[counter].created_at > julWk3S && data[counter].created_at < julWk3E) {
      julWeek3Orders = julWeek3Orders + 1
      julWeek3Income = julWeek3Income + data[counter].transaction_amount
    }
    //julWeek4
    else if (data[counter].created_at > julWk4S && data[counter].created_at < julWk4E) {
      julWeek4Orders = julWeek4Orders + 1
      julWeek4Income = julWeek4Income + data[counter].transaction_amount
    }
    // August aug
    //augWeek1
    else if (data[counter].created_at > augWk1S && data[counter].created_at < augWk1E) {
      augWeek1Orders = julWeek1Orders + 1
      augWeek1Income = julWeek1Income + data[counter].transaction_amount
    }
    //augWeek2
    else if (data[counter].created_at > augWk2S && data[counter].created_at < augWk2E) {
      augWeek2Orders = augWeek2Orders + 1
      augWeek2Income = augWeek2Income + data[counter].transaction_amount
    }
    //augWeek3
    else if (data[counter].created_at > augWk3S && data[counter].created_at < augWk3E) {
      augWeek3Orders = augWeek3Orders + 1
      augWeek3Income = augWeek3Income + data[counter].transaction_amount
    }
    //augWeek4
    else if (data[counter].created_at > augWk4S && data[counter].created_at < augWk4E) {
      augWeek4Orders = augWeek4Orders + 1
      augWeek4Income = augWeek4Income + data[counter].transaction_amount
    }
    // September sep
    //sepWeek1
    else if (data[counter].created_at > sepWk1S && data[counter].created_at < sepWk1E) {
      sepWeek1Orders = sepWeek1Orders + 1
      sepWeek1Income = sepWeek1Income + data[counter].transaction_amount
    }
    //sepWeek2
    else if (data[counter].created_at > sepWk2S && data[counter].created_at < sepWk2E) {
      sepWeek2Orders = sepWeek2Orders + 1
      sepWeek2Income = sepWeek2Income + data[counter].transaction_amount
    }
    //sepWeek3
    else if (data[counter].created_at > sepWk3S && data[counter].created_at < sepWk3E) {
      sepWeek3Orders = sepWeek3Orders + 1
      sepWeek3Income = sepWeek3Income + data[counter].transaction_amount
    }
    //sepWeek4
    else if (data[counter].created_at > sepWk4S && data[counter].created_at < sepWk4E) {
      sepWeek4Orders = sepWeek4Orders + 1
      sepWeek4Income = sepWeek4Income + data[counter].transaction_amount
    }
    // October oct
    //octWeek1
    else if (data[counter].created_at > octWk1S && data[counter].created_at < octWk1E) {
      octWeek1Orders = octWeek1Orders + 1
      octWeek1Income = octWeek1Income + data[counter].transaction_amount
    }
    //octWeek2
    else if (data[counter].created_at > octWk2S && data[counter].created_at < octWk2E) {
      octWeek2Orders = octWeek2Orders + 1
      octWeek2Income = octWeek2Income + data[counter].transaction_amount
    }
    //octWeek3
    else if (data[counter].created_at > octWk3S && data[counter].created_at < octWk3E) {
      octWeek3Orders = octWeek3Orders + 1
      octWeek3Income = octWeek3Income + data[counter].transaction_amount
    }
    //octWeek4
    else if (data[counter].created_at > octWk4S && data[counter].created_at < octWk4E) {
      octWeek4Orders = octWeek4Orders + 1
      octWeek4Income = octWeek4Income + data[counter].transaction_amount
    }
    // November nov
    //novWeek1
    else if (data[counter].created_at > novWk1S && data[counter].created_at < novWk1E) {
      novWeek1Orders = novWeek1Orders + 1
      novWeek1Income = novWeek1Income + data[counter].transaction_amount
    }
    //novWeek2
    else if (data[counter].created_at > novWk2S && data[counter].created_at < novWk2E) {
      novWeek2Orders = novWeek2Orders + 1
      novWeek2Income = novWeek2Income + data[counter].transaction_amount
    }
    //novWeek3
    else if (data[counter].created_at > novWk3S && data[counter].created_at < novWk3E) {
      novWeek3Orders = novWeek3Orders + 1
      novWeek3Income = novWeek3Income + data[counter].transaction_amount
    }
    //novWeek4
    else if (data[counter].created_at > novWk4S && data[counter].created_at < novWk4E) {
      novWeek4Orders = novWeek4Orders + 1
      novWeek4Income = novWeek4Income + data[counter].transaction_amount
    }
    // December dec
    //decWeek1
    else if (data[counter].created_at > decWk1S && data[counter].created_at < decWk1E) {
      decWeek1Orders = decWeek1Orders + 1
      novWeek1Income = decWeek1Income + data[counter].transaction_amount
    }
    //decWeek2
    else if (data[counter].created_at > decWk2S && data[counter].created_at < decWk2E) {
      decWeek2Orders = decWeek2Orders + 1
      decWeek2Income = decWeek2Income + data[counter].transaction_amount
    }
    //decWeek3
    else if (data[counter].created_at > decWk3S && data[counter].created_at < decWk3E) {
      decWeek3Orders = decWeek3Orders + 1
      decWeek3Income = decWeek3Income + data[counter].transaction_amount
    }
    //decWeek4
    else if (data[counter].created_at > decWk4S && data[counter].created_at < decWk4E) {
      decWeek4Orders = decWeek4Orders + 1
      decWeek4Income = decWeek4Income + data[counter].transaction_amount
    } else {
      console.log("something is not formated")
    }
    //close
  }

  Mchartdata = {
    '2017': {
      'jan': {
        'week1Orders': janWeek1Orders,
        'week1income': janWeek1Income,
        'week2Orders': janWeek2Orders,
        'week2income': janWeek2Income,
        'week3Orders': janWeek3Orders,
        'week3income': janWeek3Income,
        'week4Orders': janWeek4Orders,
        'week4income': janWeek4Income,
      },
      'feb': {
        'week1Orders': febWeek1Orders,
        'week1income': febWeek1Income,
        'week2Orders': febWeek2Orders,
        'week2income': febWeek2Income,
        'week3Orders': febWeek3Orders,
        'week3income': febWeek3Income,
        'week4Orders': febWeek4Orders,
        'week4income': febWeek4Income,
      },
      'mar': {
        'week1Orders': marWeek1Orders,
        'week1income': marWeek1Income,
        'week2Orders': marWeek2Orders,
        'week2income': marWeek2Income,
        'week3Orders': marWeek3Orders,
        'week3income': marWeek3Income,
        'week4Orders': marWeek4Orders,
        'week4income': marWeek4Income,
      },
      'apr': {
        'week1Orders': aprWeek1Orders,
        'week1income': aprWeek1Income,
        'week2Orders': aprWeek2Orders,
        'week2income': aprWeek2Income,
        'week3Orders': aprWeek3Orders,
        'week3income': aprWeek3Income,
        'week4Orders': aprWeek4Orders,
        'week4income': aprWeek4Income,
      },
      'may': {
        'week1Orders': mayWeek1Orders,
        'week1income': mayWeek1Income,
        'week2Orders': mayWeek2Orders,
        'week2income': mayWeek2Income,
        'week3Orders': mayWeek3Orders,
        'week3income': mayWeek3Income,
        'week4Orders': mayWeek4Orders,
        'week4income': mayWeek4Income,
      },
      'jun': {
        'week1Orders': junWeek1Orders,
        'week1income': junWeek1Income,
        'week2Orders': junWeek2Orders,
        'week2income': junWeek2Income,
        'week3Orders': junWeek3Orders,
        'week3income': junWeek3Income,
        'week4Orders': junWeek4Orders,
        'week4income': junWeek4Income,
      },
      'jul': {
        'week1Orders': julWeek1Orders,
        'week1income': julWeek1Income,
        'week2Orders': julWeek2Orders,
        'week2income': julWeek2Income,
        'week3Orders': julWeek3Orders,
        'week3income': julWeek3Income,
        'week4Orders': julWeek4Orders,
        'week4income': julWeek4Income,
      },
      'aug': {
        'week1Orders': augWeek1Orders,
        'week1income': augWeek1Income,
        'week2Orders': augWeek2Orders,
        'week2income': augWeek2Income,
        'week3Orders': augWeek3Orders,
        'week3income': augWeek3Income,
        'week4Orders': augWeek4Orders,
        'week4income': augWeek4Income,
      },
      'sep': {
        'week1Orders': sepWeek1Orders,
        'week1income': sepWeek1Income,
        'week2Orders': sepWeek2Orders,
        'week2income': sepWeek2Income,
        'week3Orders': sepWeek3Orders,
        'week3income': sepWeek3Income,
        'week4Orders': sepWeek4Orders,
        'week4income': sepWeek4Income,
      },
      'oct': {
        'week1Orders': octWeek1Orders,
        'week1income': octWeek1Income,
        'week2Orders': octWeek2Orders,
        'week2income': octWeek2Income,
        'week3Orders': octWeek3Orders,
        'week3income': octWeek3Income,
        'week4Orders': octWeek4Orders,
        'week4income': octWeek4Income,
      },
      'nov': {
        'week1Orders': novWeek1Orders,
        'week1income': novWeek1Income,
        'week2Orders': novWeek2Orders,
        'week2income': novWeek2Income,
        'week3Orders': novWeek3Orders,
        'week3income': novWeek3Income,
        'week4Orders': novWeek4Orders,
        'week4income': novWeek4Income,
      },
      'dec': {
        'week1Orders': decWeek1Orders,
        'week1income': decWeek1Income,
        'week2Orders': decWeek2Orders,
        'week2income': decWeek2Income,
        'week3Orders': decWeek3Orders,
        'week3income': decWeek3Income,
        'week4Orders': decWeek4Orders,
        'week4income': decWeek4Income,
      },
      'janTotalOrder': janWeek1Orders + janWeek2Orders + janWeek3Orders + janWeek4Orders,
      'janIncome': janWeek1Income + janWeek2Income + janWeek3Income + janWeek4Income,
      'febTotalOrder': febWeek1Orders + febWeek2Orders + febWeek3Orders + febWeek4Orders,
      'febIncome': febWeek1Income + febWeek2Income + febWeek3Income + febWeek4Income,
      'marTotalOrder': marWeek1Orders + marWeek2Orders + marWeek3Orders + marWeek4Orders,
      'marIncome': marWeek1Income + marWeek2Income + marWeek3Income + marWeek4Income,
      'aprTotalOrder': aprWeek1Orders + aprWeek2Orders + aprWeek3Orders + aprWeek4Orders,
      'aprIncome': aprWeek1Income + aprWeek2Income + aprWeek3Income + aprWeek4Income,
      'mayTotalOrder': mayWeek1Orders + mayWeek2Orders + mayWeek3Orders + mayWeek4Orders,
      'mayIncome': mayWeek1Income + mayWeek2Income + mayWeek3Income + mayWeek4Income,
      'junTotalOrder': junWeek1Orders + junWeek2Orders + junWeek3Orders + junWeek4Orders,
      'junIncome': junWeek1Income + junWeek2Income + junWeek3Income + junWeek4Income,
      'julTotalOrder': julWeek1Orders + julWeek2Orders + julWeek3Orders + julWeek4Orders,
      'julIncome': julWeek1Income + julWeek2Income + julWeek3Income + julWeek4Income,
      'augTotalOrder': augWeek1Orders + augWeek2Orders + augWeek3Orders + augWeek4Orders,
      'augIncome': augWeek1Income + augWeek2Income + augWeek3Income + augWeek4Income,
      'sepTotalOrder': sepWeek1Orders + sepWeek2Orders + sepWeek3Orders + sepWeek4Orders,
      'sepIncome': sepWeek1Income + sepWeek2Income + sepWeek3Income + sepWeek4Income,
      'octTotalOrder': octWeek1Orders + octWeek2Orders + octWeek3Orders + octWeek4Orders,
      'octIncome': octWeek1Income + octWeek2Income + octWeek3Income + octWeek4Income,
      'novTotalOrder': novWeek1Orders + novWeek2Orders + novWeek3Orders + novWeek4Orders,
      'novIncome': novWeek1Income + novWeek2Income + novWeek3Income + novWeek4Income,
      'decTotalOrder': decWeek1Orders + decWeek2Orders + decWeek3Orders + decWeek4Orders,
      'decIncome': decWeek1Income + decWeek2Income + decWeek3Income + decWeek4Income,
    }

  };
}



































// Test Functions
//read from db, then send to merchant_index via ejs

module.exports.ATransactiondataGEN = ATransactiondataGEN;
///AdminDashboardData///
var ATransactiondata = [{
    "transaction_id": "fcefeeda3cf7",
    "user_id": "12345",
    "merchant_name": "AUSTRALIAN AGRICULTURAL COMPANY LIMITED",
    "branch_id": "AAC",
    "created_at": "2017-08-31T06:39:49.225Z",
    "transaction_amount": "$" + 2572,
    "transaction_type": 1
  },
  {
    "transaction_id": "625799b05479",
    "user_id": "112233",
    "merchant_name": "ARDENT LEISURE GROUP",
    "branch_id": "AAD",
    "created_at": "2017-08-31T06:35:41.696Z",
    "transaction_amount": "$" + 2183,
    "transaction_type": 4
  },
  {
    "transaction_id": "c4fd43e6f8c0",
    "user_id": "223344",
    "merchant_name": "AUSENCO LIMITED",
    "branch_id": "AAX",
    "created_at": "2017-08-31T06:46:57.839Z",
    "transaction_amount": "$" + 35113,
    "transaction_type": 0
  },
  {
    "transaction_id": "e42b0077402b",
    "user_id": "332211",
    "merchant_name": "ABACUS PROPERTY GROUP",
    "branch_id": "ABP",
    "created_at": "2017-08-31T07:15:05.699Z",
    "transaction_amount": "$" + 6352,
    "transaction_type": 5
  },
  {
    "transaction_id": "21579c676e58",
    "user_id": "778899",
    "merchant_name": "ADELAIDE BRIGHTON LIMITED",
    "branch_id": "ABC",
    "created_at": "2017-08-31T06:26:44.036Z",
    "transaction_amount": "$" + 214,
    "transaction_type": 2
  },
  {
    "transaction_id": "aef1579c676e",
    "user_id": "738201",
    "merchant_name": "EUMENTHOL BAY LIMITED",
    "branch_id": "EBL",
    "created_at": "2017-08-31T07:15:27.036Z",
    "transaction_amount": "$" + 6322,
    "transaction_type": 6
  },
  {
    "transaction_id": "aef157eb0031",
    "user_id": "738201",
    "merchant_name": "SUNBAY LAGOON",
    "branch_id": "SBL",
    "created_at": "2017-08-30T08:24:31.234Z",
    "transaction_amount": "$" + 6322,
    "transaction_type": 6
  },
  {
    "transaction_id": "95a8eef3a97c",
    "user_id": "098765",
    "merchant_name": "IRON LIMITED",
    "branch_id": "ILT",
    "created_at": "2017-08-30T06:45:23.619Z",
    "transaction_amount": "$" + 9872,
    "transaction_type": 3
  },
  {
    "transaction_id": "a91eb26228c4",
    "user_id": "567890",
    "merchant_name": "ENERGY LIMITED",
    "branch_id": "ELT",
    "created_at": "2017-08-29T06:25:45.419Z",
    "transaction_amount": "$" + 12358,
    "transaction_type": 6
  },
  {
    "transaction_id": "a91eb003167",
    "user_id": "129067",
    "merchant_name": "LONGISLAND LIMITED",
    "branch_id": "LIL",
    "created_at": "2017-08-29T06:45:50.429Z",
    "transaction_amount": "$" + 7394,
    "transaction_type": 4
  },
  {
    "transaction_id": "a995a8ee3167",
    "user_id": "736485",
    "merchant_name": "LOCKSMITH LIMITED",
    "branch_id": "LSL",
    "created_at": "2017-08-26T06:29:50.419Z",
    "transaction_amount": "$" + 2345,
    "transaction_type": 5
  },
  {
    "transaction_id": "a9cefee3167",
    "user_id": "096785",
    "merchant_name": "HUDSON PRIVATE LIMITED",
    "branch_id": "HPL",
    "created_at": "2017-08-31T07:29:29.619Z",
    "transaction_amount": "$" + 2345,
    "transaction_type": 1
  },
  {
    "transaction_id": "597e86003167",
    "user_id": "345678",
    "merchant_name": "RESOURCES LIMITED",
    "branch_id": "RLT",
    "created_at": "2017-08-26T06:26:29.714Z",
    "transaction_amount": "$" + 4817,
    "transaction_type": 1
  }
];

function ATransactiondataGEN(input) {
  return ATransactiondata
};

function dataGENdb(input) {
  return new Promise(); //for db
}
//genweekBody(data,'2017','jan')


///// Merchant Chart///////

//read from db, then send to merchant_index via ejs

module.exports.genweekBody = genweekBody;
module.exports.genYearBody = genYearBody;


var Mchartdata2 = {
  "2017": {
    'jan': {
      'week1Orders': 10,
      'week1income': 20,
      'week2Orders': 20,
      'week2income': 30,
      'week3Orders': 30,
      'week3income': 40,
      'week4Orders': 40,
      'week4income': 50,
    },
    'feb': {
      'week1Orders': 10,
      'week1income': 20,
      'week2Orders': 10,
      'week2income': 20,
      'week3Orders': 10,
      'week3income': 20,
      'week4Orders': 10,
      'week4income': 20,
    },
    'mar': {
      'week1Orders': 10,
      'week1income': 20,
      'week2Orders': 10,
      'week2income': 20,
      'week3Orders': 10,
      'week3income': 20,
      'week4Orders': 10,
      'week4income': 20,
    },
    'apr': {
      'week1Orders': 10,
      'week1income': 20,
      'week2Orders': 10,
      'week2income': 20,
      'week3Orders': 10,
      'week3income': 20,
      'week4Orders': 10,
      'week4income': 20,
    },
    'may': {
      'week1Orders': 10,
      'week1income': 20,
      'week2Orders': 10,
      'week2income': 20,
      'week3Orders': 10,
      'week3income': 20,
      'week4Orders': 10,
      'week4income': 20,
    },
    'jun': {
      'week1Orders': 10,
      'week1income': 20,
      'week2Orders': 10,
      'week2income': 20,
      'week3Orders': 10,
      'week3income': 20,
      'week4Orders': 10,
      'week4income': 20,
    },
    'jul': {
      'week1Orders': 10,
      'week1income': 20,
      'week2Orders': 10,
      'week2income': 20,
      'week3Orders': 10,
      'week3income': 20,
      'week4Orders': 10,
      'week4income': 20,
    },
    'aug': {
      'week1Orders': 10,
      'week1income': 20,
      'week2Orders': 10,
      'week2income': 20,
      'week3Orders': 10,
      'week3income': 20,
      'week4Orders': 10,
      'week4income': 20,
    },
    'sep': {
      'week1Orders': 10,
      'week1income': 20,
      'week2Orders': 10,
      'week2income': 20,
      'week3Orders': 10,
      'week3income': 20,
      'week4Orders': 10,
      'week4income': 20,
    },
    'oct': {
      'week1Orders': 10,
      'week1income': 20,
      'week2Orders': 10,
      'week2income': 20,
      'week3Orders': 10,
      'week3income': 20,
      'week4Orders': 10,
      'week4income': 20,
    },
    'nov': {
      'week1Orders': 10,
      'week1income': 20,
      'week2Orders': 10,
      'week2income': 20,
      'week3Orders': 10,
      'week3income': 20,
      'week4Orders': 10,
      'week4income': 20,
    },
    'dec': {
      'week1Orders': 10,
      'week1income': 20,
      'week2Orders': 10,
      'week2income': 20,
      'week3Orders': 10,
      'week3income': 20,
      'week4Orders': 10,
      'week4income': 20,
    },
    'janTotalOrder': 100,
    'janIncome': 200,
    'febTotalOrder': 100,
    'febIncome': 200,
    'marTotalOrder': 100,
    'marIncome': 200,
    'aprTotalOrder': 100,
    'aprIncome': 200,
    'mayTotalOrder': 100,
    'mayIncome': 200,
    'junTotalOrder': 100,
    'junIncome': 200,
    'julTotalOrder': 100,
    'julIncome': 200,
    'augTotalOrder': 100,
    'augIncome': 200,
    'sepTotalOrder': 100,
    'sepIncome': 200,
    'octTotalOrder': 100,
    'octIncome': 200,
    'novTotalOrder': 100,
    'novIncome': 200,
    'decTotalOrder': 100,
    'decIncome': 200,
  }

};


//genweekBody(data,'2017','jan')

function genweekBody(datax) { //datax change to data for production
  return new Promise((resolve, reject) => {
    var year = 2017
    console.log(Mchartdata)
    var weekBody = {
      'jan': [{

          "date": "Jan Week 1",
          "totalOrders": Mchartdata[year]['jan'].week1Orders,
          "income": Mchartdata[year]['jan'].week1income
        },
        {

          "date": "Jan Week 2",
          "totalOrders": Mchartdata[year]['jan'].week2Orders,
          "income": Mchartdata[year]['jan'].week2income
        },
        {

          "date": "Jan Week 3",
          "totalOrders": Mchartdata[year]['jan'].week3Orders,
          "income": Mchartdata[year]['jan'].week3income
        },
        {

          "date": "Jan Week 4",
          "totalOrders": Mchartdata[year]['jan'].week4Orders,
          "income": Mchartdata[year]['jan'].week4income
        }
      ],
      'feb': [{

          "date": "Feb Week 1",
          "totalOrders": Mchartdata[year]['feb'].week1Orders,
          "income": Mchartdata[year]['feb'].week1income
        },
        {

          "date": "Feb Week 2",
          "totalOrders": Mchartdata[year]['feb'].week2Orders,
          "income": Mchartdata[year]['feb'].week2income
        },
        {

          "date": "Feb Week 3",
          "totalOrders": Mchartdata[year]['feb'].week3Orders,
          "income": Mchartdata[year]['feb'].week3income
        },
        {

          "date": "Feb Week 4",
          "totalOrders": Mchartdata[year]['feb'].week4Orders,
          "income": Mchartdata[year]['feb'].week4income
        }
      ],
      'mar': [{

          "date": "Mar Week 1",
          "totalOrders": Mchartdata[year]['mar'].week1Orders,
          "income": Mchartdata[year]['mar'].week1income
        },
        {

          "date": "Mar Week 2",
          "totalOrders": Mchartdata[year]['mar'].week2Orders,
          "income": Mchartdata[year]['mar'].week2income
        },
        {

          "date": "Mar Week 3",
          "totalOrders": Mchartdata[year]['mar'].week3Orders,
          "income": Mchartdata[year]['mar'].week3income
        },
        {

          "date": "Mar Week 4",
          "totalOrders": Mchartdata[year]['mar'].week4Orders,
          "income": Mchartdata[year]['mar'].week4income
        }
      ],
      'apr': [{

          "date": "Apr Week 1",
          "totalOrders": Mchartdata[year]['apr'].week1Orders,
          "income": Mchartdata[year]['apr'].week1income
        },
        {

          "date": "Apr Week 2",
          "totalOrders": Mchartdata[year]['apr'].week2Orders,
          "income": Mchartdata[year]['apr'].week2income
        },
        {

          "date": "Apr Week 3",
          "totalOrders": Mchartdata[year]['apr'].week3Orders,
          "income": Mchartdata[year]['apr'].week3income
        },
        {

          "date": "Apr Week 4",
          "totalOrders": Mchartdata[year]['apr'].week4Orders,
          "income": Mchartdata[year]['apr'].week4income
        }
      ],
      'may': [{

          "date": "May Week 1",
          "totalOrders": Mchartdata[year]['may'].week1Orders,
          "income": Mchartdata[year]['may'].week1income
        },
        {

          "date": "May Week 2",
          "totalOrders": Mchartdata[year]['may'].week2Orders,
          "income": Mchartdata[year]['may'].week2income
        },
        {

          "date": "May Week 3",
          "totalOrders": Mchartdata[year]['may'].week3Orders,
          "income": Mchartdata[year]['may'].week3income
        },
        {

          "date": "May Week 4",
          "totalOrders": Mchartdata[year]['may'].week4Orders,
          "income": Mchartdata[year]['may'].week4income
        }
      ],
      'jun': [{

          "date": "Jun Week 1",
          "totalOrders": Mchartdata[year]['jun'].week1Orders,
          "income": Mchartdata[year]['jun'].week1income
        },
        {

          "date": "Jun Week 2",
          "totalOrders": Mchartdata[year]['jun'].week2Orders,
          "income": Mchartdata[year]['jun'].week2income
        },
        {

          "date": "Jun Week 3",
          "totalOrders": Mchartdata[year]['jun'].week3Orders,
          "income": Mchartdata[year]['jun'].week3income
        },
        {

          "date": "Jun Week 4",
          "totalOrders": Mchartdata[year]['jun'].week4Orders,
          "income": Mchartdata[year]['jun'].week4income
        }
      ],
      'jul': [{

          "date": "Jul Week 1",
          "totalOrders": Mchartdata[year]['jul'].week1Orders,
          "income": Mchartdata[year]['jul'].week1income
        },
        {

          "date": "Jul Week 2",
          "totalOrders": Mchartdata[year]['jul'].week2Orders,
          "income": Mchartdata[year]['jul'].week2income
        },
        {

          "date": "Jul Week 3",
          "totalOrders": Mchartdata[year]['jul'].week3Orders,
          "income": Mchartdata[year]['jul'].week3income
        },
        {

          "date": "Jul Week 4",
          "totalOrders": Mchartdata[year]['jul'].week4Orders,
          "income": Mchartdata[year]['jul'].week4income
        }
      ],
      'aug': [{

          "date": "Aug Week 1",
          "totalOrders": Mchartdata[year]['aug'].week1Orders,
          "income": Mchartdata[year]['aug'].week1income
        },
        {

          "date": "Aug Week 2",
          "totalOrders": Mchartdata[year]['aug'].week2Orders,
          "income": Mchartdata[year]['aug'].week2income
        },
        {

          "date": "Aug Week 3",
          "totalOrders": Mchartdata[year]['aug'].week3Orders,
          "income": Mchartdata[year]['aug'].week3income
        },
        {

          "date": "Aug Week 4",
          "totalOrders": Mchartdata[year]['aug'].week4Orders,
          "income": Mchartdata[year]['aug'].week4income
        }
      ],
      'sep': [{

          "date": "Sep Week 1",
          "totalOrders": Mchartdata[year]['sep'].week1Orders,
          "income": Mchartdata[year]['sep'].week1income
        },
        {

          "date": "Sep Week 2",
          "totalOrders": Mchartdata[year]['sep'].week2Orders,
          "income": Mchartdata[year]['sep'].week2income
        },
        {

          "date": "Sep Week 3",
          "totalOrders": Mchartdata[year]['sep'].week3Orders,
          "income": Mchartdata[year]['sep'].week3income
        },
        {

          "date": "Sep Week 4",
          "totalOrders": Mchartdata[year]['sep'].week4Orders,
          "income": Mchartdata[year]['sep'].week4income
        }
      ],
      'oct': [{

          "date": "Oct Week 1",
          "totalOrders": Mchartdata[year]['oct'].week1Orders,
          "income": Mchartdata[year]['oct'].week1income
        },
        {

          "date": "Oct Week 2",
          "totalOrders": Mchartdata[year]['oct'].week2Orders,
          "income": Mchartdata[year]['oct'].week2income
        },
        {

          "date": "Oct Week 3",
          "totalOrders": Mchartdata[year]['oct'].week3Orders,
          "income": Mchartdata[year]['oct'].week3income
        },
        {

          "date": "Oct Week 4",
          "totalOrders": Mchartdata[year]['oct'].week4Orders,
          "income": Mchartdata[year]['oct'].week4income
        }
      ],
      'nov': [{

          "date": "Nov Week 1",
          "totalOrders": Mchartdata[year]['nov'].week1Orders,
          "income": Mchartdata[year]['nov'].week1income
        },
        {

          "date": "Nov Week 2",
          "totalOrders": Mchartdata[year]['nov'].week2Orders,
          "income": Mchartdata[year]['nov'].week2income
        },
        {

          "date": "Nov Week 3",
          "totalOrders": Mchartdata[year]['nov'].week3Orders,
          "income": Mchartdata[year]['nov'].week3income
        },
        {

          "date": "Nov Week 4",
          "totalOrders": Mchartdata[year]['nov'].week4Orders,
          "income": Mchartdata[year]['nov'].week4income
        }
      ],
      'dec': [{

          "date": "Dec Week 1",
          "totalOrders": Mchartdata[year]['dec'].week1Orders,
          "income": Mchartdata[year]['dec'].week1income
        },
        {

          "date": "Dec Week 2",
          "totalOrders": Mchartdata[year]['dec'].week2Orders,
          "income": Mchartdata[year]['dec'].week2income
        },
        {

          "date": "Dec Week 3",
          "totalOrders": Mchartdata[year]['dec'].week3Orders,
          "income": Mchartdata[year]['dec'].week3income
        },
        {

          "date": "Dec Week 4",
          "totalOrders": Mchartdata[year]['dec'].week4Orders,
          "income": Mchartdata[year]['dec'].week4income
        }
      ],

    };
    resolve(weekBody);
    console.log("hihihihihi" + weekBody['jan']);
  });
};




function genYearBody(datax, year) { //change back to data from datax when real data is ready
  return new Promise((resolve, reject) => {

    var yearBody = [{

      "date": "Jan",
      "totalOrders": Mchartdata[year].janTotalOrder,
      "income": Mchartdata[year].janIncome
    }, {
      "date": "Feb",
      "totalOrders": Mchartdata[year].febTotalOrder,
      "income": Mchartdata[year].febIncome
    }, {
      "date": "Mar",
      "totalOrders": Mchartdata[year].marTotalOrder,
      "income": Mchartdata[year].marIncome
    }, {
      "date": "Apr",
      "totalOrders": Mchartdata[year].aprTotalOrder,
      "income": Mchartdata[year].aprIncome
    }, {
      "date": "May",
      "totalOrders": Mchartdata[year].mayTotalOrder,
      "income": Mchartdata[year].mayIncome
    }, {
      "date": "Jun",
      "totalOrders": Mchartdata[year].junTotalOrder,
      "income": Mchartdata[year].junIncome
    }, {
      "date": "Jul",
      "totalOrders": Mchartdata[year].julIncome,
      "income": Mchartdata[year].julIncome
    }, {
      "date": "Aug",
      "totalOrders": Mchartdata[year].augTotalOrder,
      "income": Mchartdata[year].augIncome
    }, {
      "date": "Sep",
      "totalOrders": Mchartdata[year].sepTotalOrder,
      "income": Mchartdata[year].sepIncome
    }, {
      "date": "Oct",
      "totalOrders": Mchartdata[year].octTotalOrder,
      "income": Mchartdata[year].octIncome
    }, {
      "date": "Nov",
      "totalOrders": Mchartdata[year].novTotalOrder,
      "income": Mchartdata[year].novIncome
    }, {
      "date": "Dec",
      "totalOrders": Mchartdata[year].decTotalOrder,
      "income": Mchartdata[year].decIncome
    }];
    resolve(yearBody);
    console.log(yearBody)
  });
};