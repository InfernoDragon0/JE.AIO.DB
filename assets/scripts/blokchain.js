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
                    <td>{data.transactionTimestamp}</td>
                    <td>{data.transactionType}</td>
                    <td>{data.transactionInvoked}</td>
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
                        <th><i className="fa fa-shopping-cart"></i> Transaction Class </th>
                        <th><i className="fa fa-user"></i> Transaction Invoked </th>
                    </tr>
                </thead>
                <DashboardRow />
            </table>
        </div>,
        document.getElementById("BCdashboard")
    )
    TableDatatablesButtons.init();


}
