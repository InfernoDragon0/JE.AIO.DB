renderData()
function renderData() {
    // console.log(JSON.stringify(alldata))
    var datajson = JSON.parse(alldata.replace(/&#34;/g, '"')).body
    // console.log(datajson)
    // console.log("HAHAHAH")
    const SettlingTrow = () => (
        <tbody id="selectable">
            {datajson.map((data, i) => (
                <tr key={i}>
                    <td className= "merchantid">{data.merchant_id}</td>
                    <td className= "merchant_name">{data.merchant_name}</td>
                    <td className= "settlement_amount">{data.settlement_amount}</td>
                    <td className="transactionid">{data.transaction_ids+','}</td>                   
                </tr>

            ))}
        </tbody>
    )

    ReactDOM.render(
        <div>
            <table className="table table-bordered table-striped table-condensed flip-content" id="sample_test">
                <thead className="flip-content" >
                    <tr>
                        <th><i className="fa fa-info-circle"></i> Merchant ID </th>
                        <th><i className="fa fa-info-circle"></i> Merchant Name </th>
                        <th><i className="fa fa-shopping-cart"></i> Amount </th>
                        <th><i className="fa fa-info"></i> Transaction ID </th>
                        
                    </tr>
                </thead>
                <SettlingTrow />
            </table>
        </div>,
        document.getElementById("settlingTable"),
        
        () => {
            console.log("rendererd");
            $("#selectable").selectable({
                filter: 'tr',
                stop: function () {
                    var result = ""
                    var result2 = ""
                    var merchantid = ""
                    var amount = ""
                    var merchantName = ""
                    $(".ui-selected", this).each(function () {
                        var index = $(this).find(".transactionid").text();
                        var merchantID2 = $(this).find(".merchantid").text();
                        var amount2 = $(this).find(".settlement_amount").text();
                        var merchantName2 = $(this).find(".merchant_name").text();
                        merchantid = merchantID2
                        amount = amount2
                        merchantName = merchantName2
                        result += ("\n" + "Amount Payable: " + amount + "\n" + "Transaction IDs: " + index + "\n" + "//");
                    })
                    swal({
                        title: 'Merchant Name: ' + merchantName,
                        text: result,
                        type: 'warning',
                        input: 'text',
                        inputPlaceholder: 'Confirm',
                        showCancelButton: true,
                        allowOutsideClick: false,
                        inputValidator: function (value) {
                            return new Promise(function (resolve, reject) {
                                if (value === 'Confirm') {
                                    resolve()
                                } else {
                                    reject('Please type in the word "Confirm" in order to proceed!')
                                }
                            })
                        }
                    }).then(function (name) {
                        swal({
                            type: 'success',
                            title: 'Confirmed!'
                        })
                    })
                }
            });
        }
     
       
    )
    
    TableDatatablesButtons.init();
}

// title: " Merchant ID : "+merchantID,
// text: "Transaction IDs :"+result2 ,