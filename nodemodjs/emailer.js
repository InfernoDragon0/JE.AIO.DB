var nodemailer = require('nodemailer');
var api = require('./databaseApiCall.js')

module.exports.sendSettlementEmail=sendSettlementEmail

function sendSettlementEmail(merchantId,amount,settlementID){
    var openPromise=getMerchantEmail(merchantId)
    openPromise.then((email)=>{
        sendMail(email,amount,settlementID)
    })
}

function getMerchantEmail(merchantId) {
    return new Promise((resolve, reject) => {
        var openPromise = api.retrieveIdMerchant(merchantId)
        openPromise.then((data)=>{
            resolve(data.body.email)
        })
    })
}

function sendMail(merchantEmail, Amount, settlementID) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'junglepayment@gmail.com',
            pass: 'jpay1234'
        }
    });

    var mailOptions = {
        from: 'junglepayment@gmail.com',
        to: merchantEmail,
        subject: 'Settlement Receipt',
        text: 'Settlment ID: ' + settlementID + ' ,Total Amount Settled: ' + Amount + '. For more Info login to your merchant Dashboard.Thanks for using our service.'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}