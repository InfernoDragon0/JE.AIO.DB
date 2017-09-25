renderData()

function renderData() {
    // console.log("yayy"+alldata.replace(/&#34;/g, '"'))
    var newJson = alldata.replace(/&#34;/g, '"')
    // var newJson2 =newJson.replace(/\$/g, '')
    var result = newJson.substring(1, newJson.length-1);
    console.log(result)
    
    var datajson = JSON.parse(result)
    console.log("datajson is" + JSON.stringify(datajson))

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
                    {/* <td>{data.resources ? data.$class : "--"}</td> */}
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
                        {/* <th><i className="fa fa-info"></i> Transaction Class </th> */}
                    </tr>
                </thead>
                <DashboardRow />
            </table>
        </div>,
        document.getElementById("dashboard"),
        () => {
            console.log("rendererd");
            $("#selectable").selectable({
                filter: 'tr',
                stop: function () {
                    var result = ""
                    $(".ui-selected", this).each(function () {
                        var index = $(this).find(".transactionid").text();
                        result += ("row " + index + "\n");     
                    })
                    alert("Selected " + result)
                }
            });
        }
    )
    TableDatatablesButtons.init();


}
