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
                        var merchantID2= $(this).find(".merchantid").text();
                        var amount2= $(this).find(".settlement_amount").text();
                        var merchantName2= $(this).find(".merchant_name").text();
                        result += ("Row " + index + ",\n" );
                        result2 += (index + " " );
                        merchantid= merchantID2
                        amount = amount2
                        merchantName = merchantName2
                    })
                    swal({
                        title: " Merchant Name :"+merchantName,
                        text: "Amount Payable :"+amount +"\r\n"+"Transaction IDs :"+result2 ,
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, Proceed!', // add functions here
                        cancelButtonText: 'No, Cancel!',
                        confirmButtonClass: 'btn btn-success',
                        cancelButtonClass: 'btn btn-danger',
                        buttonsStyling: true
                    }).then(function () {
                        sendSelected(result2);
                        swal(
                            'Success!',
                            '',
                            'success'
                        )
                        
                    }, function (dismiss) {
                        // dismiss can be 'cancel', 'overlay',
                        // 'close', and 'timer'
                        if (dismiss === 'cancel') {
                            swal(
                                'Cancelled',
                                '',
                                'error'
                            )
                        }
                    })
                }
            });
        }
     
       
    )
    
    TableDatatablesButtons.init();
}

// title: " Merchant ID : "+merchantID,
// text: "Transaction IDs :"+result2 ,