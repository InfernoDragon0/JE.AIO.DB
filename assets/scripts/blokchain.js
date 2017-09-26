renderData()

function renderData() {
    var newJson = alldata.replace(/&#34;/g, '"')
    var result = newJson.substring(1, newJson.length-1);
    var datajson = JSON.parse(result)
    const DashboardRow = () => (
        <tbody id="selectable">
            {datajson.map((data, i) => (
                <tr key={i}>
                    <td className="transactionid">{data.transactionId}</td>
                    <td>{data.timestamp}</td>
                    <td>{data.amount ? data.amount : data.amount ? data.asset : "--"}</td>
                    <td>{data.asset ? data.asset : data.asset ? data.asset : "--"}</td>
                    <td>{data.asset2 ? data.asset2 : data.asset2 ? data.asset2 : "--"}</td>
                    <td>{data.$class}</td>
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
                    </tr>
                </thead>
                <DashboardRow />
            </table>
        </div>,
        document.getElementById("dashboard")
    )
    TableDatatablesButtons.init();


}
