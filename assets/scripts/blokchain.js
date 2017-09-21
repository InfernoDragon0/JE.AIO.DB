renderData()

function renderData() {

    var datajson = JSON.parse(alldata.replace(/&#34;/g, '"'))
    console.log("datajson is" + JSON.stringify(datajson))

    const DashboardRow = () => (
        <tbody>
            {datajson.map((data, i) => (
                <tr key={i}>
                    <td>{data.transactionId}</td>
                    <td>{data.timestamp}</td>
                    <td>{data.amount ? data.amount : data.resources[0].value}</td>
                    <td>{data.asset ? data.asset : data.resources[0].clientWalletID ? data.resources[0].clientWalletID : "--"}</td>
                    <td>{data.asset2 ? data.asset2 : data.resources[0].merchantWalletID ? data.resources[0].merchantWalletID : "--"}</td> 
                    <td>{data.$class}</td>
                    <td>{data.resources ? data.resources[0].$class : "--"}</td>
                </tr>
            ))}
        </tbody>
    )

    ReactDOM.render(
        <div>
            <table className="table table-bordered table-striped table-condensed flip-content" id="sample_test">
                <thead className="flip-content" >
                    <tr>
                        <th><i className="fa fa-info-circle"></i> Transaction ID </th>
                        <th className="hidden-xs"><i className="fa fa-clock"></i> Time </th>
                        <th><i className="fa fa-shopping-cart"></i> Amount </th>
                        <th><i className="fa fa-user"></i> Client ID </th>
                        <th><i className="fa fa-user"></i> Merchant ID </th>
                        <th><i className="fa fa-times"></i> Transaction Type </th>
                        <th><i className="fa fa-info"></i> Transaction Class </th>
                    </tr>
                </thead>
                <DashboardRow/>
            </table>
        </div>,
        document.getElementById("dashboard")
    )
    TableDatatablesButtons.init();
}
