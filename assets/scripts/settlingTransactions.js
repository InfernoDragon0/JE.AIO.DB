renderData()
function renderData() {

    var datajson = JSON.parse(alldata.replace(/&#34;/g, '"'))
  
    // console.log(filteredData)
    const settlingTrow = () => (
        <tbody id="selectable">
            {datajson.map((data, i) => (
                <tr key={i}>
                    <td>{data.merchant_id}</td>
                    <td>{data.merchant_name}</td>
                    <td>{data.total_amount}</td>
                    <td className="transactionid">{data.transaction_ids}</td>                   
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
                <settlingTrow />
            </table>
        </div>,
        document.getElementById("settlingTable"),
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
                    databaseFunctions.tester(index);
                    
                }
            });
        }
       
    )
    
    TableDatatablesButtons.init();
}
