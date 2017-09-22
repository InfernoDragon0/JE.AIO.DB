var body = [{
    'merchant_id': 1,
    'merchant_name': "name",
    'settlement_amt': "amt",
    'date': "date",
    'transaction_id':[{
        'id1': 1,
        'id2': 2
    }]
},
{
    'merchant_id': 2,
    'merchant_name': "name",
    'settlement_amt': "amt",
    'date': "date",
    'transaction_id': [
        {'id1': '1'},
        {'id2': '2'}
    ]
}]

console.log(body[0].transaction_id[1])