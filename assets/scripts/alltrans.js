renderData()

function renderData() {

    var datajson = JSON.parse(alldata.replace(/&#34;/g, '"'))
    console.log("datajson is" + JSON.stringify(datajson))

    const AllTrow = () => (
        <tbody>
            {datajson.map((data, i) => (
                <tr key={i}>
                    <td>{data.transaction_id}</td>
                    <td>{data.fk_user_id}</td>
                    <td>{data.fk_merchant_id}</td>
                    <td>{data.fk_branch_id}</td>
                    <td>{data.created_at}</td>
                    <td>{data.transaction_amount}</td>
                    <td>{data.transaction_type == 0 ? "Pending" :
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
                        <th><i className="fa fa-briefcase"></i> Branch ID </th>
                        <th><i className="fa fa-calendar"></i> Date </th>
                        <th><i className="fa fa-shopping-cart"></i> Amount </th>
                        <th><i className="fa fa-feed"></i> Status </th>
                    </tr>
                </thead>
                <AllTrow />
            </table>
        </div>,
        document.getElementById("alltranstable")
    )
    TableDatatablesButtons.init();
}
