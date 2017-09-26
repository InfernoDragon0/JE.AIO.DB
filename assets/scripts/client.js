var http = new XMLHttpRequest();

function sendPost(url, params) {
http.open("POST", url, true);

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        document.write(http.responseText);
    }
}
http.send(params);
}

function sendSelected(transactions) {
    sendPost("/transactionidstuff", "transactionid=" + transactions)
}

function sendSelectedforRefund(transactions) {
    sendPost("/processRefund", "transactionid=" + transactions)
}


function sendSelectedforChargeBack(transactions) {
    sendPost("/processChargeBack", "transactionid=" + transactions)
}