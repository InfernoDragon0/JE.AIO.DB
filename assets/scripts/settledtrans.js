renderData()
function renderData() {
    var data2 = alldata.replace(/&#34;/g, '$')
    var data3 = data2.replace(/\$/g, '\"')
    var result = data3.substring(1, data3.length-1);
     var datajson = JSON.parse(result)
    const SettledTrow = () => (
        <tbody id="selectable">
            {datajson.map((data, i) => (
                <tr key={i}>
                    <td className= "settlment_id">{data.settlement_id}</td>
                    <td className= "merchantid">{data.fk_merchant_id}</td>
                    <td className= "merchantid">{data.fk_branch_id}</td>
                    <td className= "settlement_amount">{data.settlement_amount}</td>
                    <td className="transactionid">{data.fk_transaction_id+','}</td>                   
                </tr>

            ))}
        </tbody>
    )

    ReactDOM.render(
        <div>
            <table className="table table-bordered table-striped table-condensed flip-content" id="sample_test">
                <thead className="flip-content" >
                    <tr>
                        <th><i className="fa fa-info-circle"></i> Settlement ID </th>                        
                        <th><i className="fa fa-info-circle"></i> Merchant ID </th>
                        <th><i className="fa fa-info-circle"></i> Branch ID </th>
                        <th><i className="fa fa-shopping-cart"></i> Amount </th>
                        <th><i className="fa fa-info"></i> Transaction ID </th>
                        
                    </tr>
                </thead>
                <SettledTrow />
            </table>
        </div>,
        document.getElementById("settledTransTable")      
    )
    
    TableDatatablesButtons.init();
}
