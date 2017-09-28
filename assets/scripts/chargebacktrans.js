renderData()
function renderData() {

    var datajson = JSON.parse(alldata.replace(/&#34;/g, '"'))
    var filteredData = []
    for (var counter = 0; counter < datajson.length; counter ++){
        if( datajson[counter].transaction_type == 1 || 
            datajson[counter].transaction_type == 2 ||
            datajson[counter].transaction_type == 3 || 
            datajson[counter].transaction_type == 5 ||
            datajson[counter].transaction_type == 6 ){
            filteredData.push(datajson[counter]);
        }
    }
    const ChargebackTrow = () => (
        <tbody id="selectable">
            {filteredData.map((data, i) => (
                <tr key={i}>
                    <td className="transactionid">{data.transaction_id}</td>
                    <td className="fk_user_id">{data.fk_user_id}</td>
                    <td className="fk_merchant_id">{data.fk_merchant_id}</td>
                    <td className="fk_branch_id">{data.fk_branch_id}</td>
                    <td className="created_at">{data.created_at}</td>
                    <td className="transaction_amount">{data.transaction_amount}</td>
                    <td className="transaction_type">{
                         data.transaction_type == 0 ? "Pending" :
                         data.transaction_type == 1 ? "Credit Payment" : 
                         data.transaction_type == 2 ? "Credit Chargeback" :
                         data.transaction_type == 3 ? "Credit Refund" :
                         data.transaction_type == 4 ? "Wallet Top-up" :
                         data.transaction_type == 5 ? "Wallet Payment" :
                         data.transaction_type == 6  ? "Wallet Refund":
                         "-"}</td>
                </tr>

            ))}
        </tbody>
    )

    ReactDOM.render(
        <div>
            <table className="table table-bordered table-striped table-condensed flip-content" id="sample_test">
                <thead className="flip-content" >
                    <tr>
                        <th><i className="fa fa-info"></i> Transaction ID </th>
                        <th className="hidden-xs">
                            <i className="fa fa-user"></i> Customer ID </th>
                        <th><i className="fa fa-info-circle"></i> Merchant ID </th>
                        <th><i className="fa fa-briefcase"></i> Branch Code </th>
                        <th><i className="fa fa-calendar"></i> Date </th>
                        <th><i className="fa fa-shopping-cart"></i> Amount </th>
                        <th><i className="fa fa-feed"></i> Status </th>
                    </tr>
                </thead>
                <ChargebackTrow />
            </table>
        </div>,
        document.getElementById("chargebackTable"),
        
        () => {
            console.log("rendererd");
            $("#selectable").selectable({
                filter: 'tr',
                stop: function () {
                    var transid = ""
                    var result = ""
                    var customerid = ""
                    var merchantid = ""
                    var branchid = ""
                    var date = ""
                    var amount = ""
                    var transtype = ""
                    var result2 = ""
                    $(".ui-selected", this).each(function () {
                        var transid2 = $(this).find(".transactionid").text();
                        var customerid2 = $(this).find(".fk_user_id").text();
                        var merchantid2 = $(this).find(".fk_merchant_id").text();
                        var branchid2 = $(this).find(".fk_branch_id").text();
                        var date2 = $(this).find(".created_at").text();
                        var amount2 = $(this).find(".transaction_amount").text();
                        var transtype2 = $(this).find(".transaction_type").text();
                        transid = transid2
                        customerid = customerid2
                        merchantid = merchantid2
                        branchid = branchid2
                        date = date2
                        amount = amount2
                        transtype = transtype2
                        result2 = (transid + "")
                        result += ("\n" + "CustomerID: " + customerid + "\n" + "MerchantID:  " + merchantid + "\n" + "BranchID:  " + branchid + "\n" + "Date:  " + date + "\n" + "Amount:  " + amount + "\n" + "TransactionType:  " + transtype + "\n" + "//");
                    })
                    swal({
                        title: 'Transaction ID: ' + transid,
                        text: result,
                        type: 'warning',
                        input: 'text',
                        inputPlaceholder: 'Confirm',
                        showCancelButton: true,
                        allowOutsideClick: false,
                        inputValidator: function (value) {
                            return new Promise(function (resolve, reject) {
                                if (value === 'Confirm') {
                                    sendSelectedforChargeBack(result2)
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
