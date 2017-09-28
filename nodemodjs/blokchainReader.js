var hyperwallet = require('./hyperwallet.js')
module.exports.retrieveData = retrieveData

var data 
openPromise = hyperwallet.retrieveTransaction()
openPromise.then((dataRetrieved)=>{
    data=dataRetrieved
})

function retrieveData() {
    return data
}


