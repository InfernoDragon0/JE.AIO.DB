renderData()

function renderData() {
    // console.log("HAHAHA"alldata.replace(/&#34;/g, '"'))
    var datajson = JSON.parse(alldata.replace(/&#34;/g, '"'))
    console.log("datajson is" + JSON.stringify(datajson))
    console.log("loaded")
    var filteredMerchantData = []
    for(var counter = 0 ; counter < datajson.length;counter ++){
        if(datajson[counter].fk_merchant_id = merchantID){
            filteredMerchantData.push(datajson[counter])
        }
    }
    const AllMTransactionRow = () => (
        <tbody>
            {datajson.map((data, i) => (
                <tr key={i}>
                    <td>{data.transaction_id}</td>
                    <td>{data.fk_user_id}</td>
                    <td>{data.fk_branch_id}</td>
                    <td>{data.datetime}</td>
                    <td>{data.transaction_amount}</td>
                    <td>{data.transaction_type == 0 ? "Pending" :
                        data.transaction_type == 1 ? "Credit Payment" :
                            data.transaction_type == 2 ? "Credit Chargeback" :
                                data.transaction_type == 3 ? "Credit Refund" :
                                    data.transaction_type == 4 ? "Wallet Top-up" :
                                        data.transaction_type == 5 ? "Wallet Payment" :
                                            data.transaction_type == 6 ? "Wallet Refund" :
                                                "-"}</td>
                    <td>{data.is_transaction_complete == true ? "Y" :
                        data.is_transaction_complete == false ? "N" :
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
                        <th><i className="fa fa-briefcase"></i> Branch ID </th>
                        <th><i className="fa fa-calendar"></i> Date </th>
                        <th><i className="fa fa-shopping-cart"></i> Amount </th>
                        <th><i className="fa fa-feed"></i> Status </th>
                        <th><i className="fa fa-feed"></i> Settled </th>
                        
                    </tr>
                </thead>
                <AllMTransactionRow />
            </table>
        </div>,
        document.getElementById("merchant_table")
    )
    TableDatatablesButtons.init();
}
