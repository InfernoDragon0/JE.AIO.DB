//read from db, then send to merchant_index via ejs
module.exports.data = data;
module.exports.dataGEN = dataGEN;

var data = [{
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
}];

function dataGEN(input) { 
  return data
};

function dataGENdb(input) {
  return new Promise(); //for db
}
//genweekBody(data,'2017','jan')



