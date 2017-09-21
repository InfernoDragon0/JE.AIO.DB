//read from db, then send to merchant_index via ejs
module.exports.ATransactiondata = ATransactiondata;
module.exports.ATransactiondataGEN = ATransactiondataGEN;
///AdminDashboardData///
var ATransactiondata = [{
  "transaction_id": "fcefeeda3cf7",
  "user_id": "12345",
  "merchant_name": "AUSTRALIAN AGRICULTURAL COMPANY LIMITED",
  "branch_id": "AAC",
  "created_at": "2017-08-31T06:39:49.225Z",
  "transaction_amount": "$" + 2572,
  "transaction_type": 1
},
{
  "transaction_id": "625799b05479",
  "user_id": "112233",
  "merchant_name": "ARDENT LEISURE GROUP",
  "branch_id": "AAD",
  "created_at": "2017-08-31T06:35:41.696Z",
  "transaction_amount": "$" + 2183,
  "transaction_type": 4
},
{
  "transaction_id": "c4fd43e6f8c0",
  "user_id": "223344",
  "merchant_name": "AUSENCO LIMITED",
  "branch_id": "AAX",
  "created_at": "2017-08-31T06:46:57.839Z",
  "transaction_amount": "$" + 35113,
  "transaction_type": 0
},
{
  "transaction_id": "e42b0077402b",
  "user_id": "332211",
  "merchant_name": "ABACUS PROPERTY GROUP",
  "branch_id": "ABP",
  "created_at": "2017-08-31T07:15:05.699Z",
  "transaction_amount": "$" + 6352,
  "transaction_type": 5
},
{
  "transaction_id": "21579c676e58",
  "user_id": "778899",
  "merchant_name": "ADELAIDE BRIGHTON LIMITED",
  "branch_id": "ABC",
  "created_at": "2017-08-31T06:26:44.036Z",
  "transaction_amount": "$" + 214,
  "transaction_type": 2
},
{
  "transaction_id": "aef1579c676e",
  "user_id": "738201",
  "merchant_name": "EUMENTHOL BAY LIMITED",
  "branch_id": "EBL",
  "created_at": "2017-08-31T07:15:27.036Z",
  "transaction_amount": "$" + 6322,
  "transaction_type": 6
},
{
  "transaction_id": "aef157eb0031",
  "user_id": "738201",
  "merchant_name": "SUNBAY LAGOON",
  "branch_id": "SBL",
  "created_at": "2017-08-30T08:24:31.234Z",
  "transaction_amount": "$" + 6322,
  "transaction_type": 6
},
{
  "transaction_id": "95a8eef3a97c",
  "user_id": "098765",
  "merchant_name": "IRON LIMITED",
  "branch_id": "ILT",
  "created_at": "2017-08-30T06:45:23.619Z",
  "transaction_amount": "$" + 9872,
  "transaction_type": 3
},
{
  "transaction_id": "a91eb26228c4",
  "user_id": "567890",
  "merchant_name": "ENERGY LIMITED",
  "branch_id": "ELT",
  "created_at": "2017-08-29T06:25:45.419Z",
  "transaction_amount": "$" + 12358,
  "transaction_type": 6
},
{
  "transaction_id": "a91eb003167",
  "user_id": "129067",
  "merchant_name": "LONGISLAND LIMITED",
  "branch_id": "LIL",
  "created_at": "2017-08-29T06:45:50.429Z",
  "transaction_amount": "$" + 7394,
  "transaction_type": 4
},
{
  "transaction_id": "a995a8ee3167",
  "user_id": "736485",
  "merchant_name": "LOCKSMITH LIMITED",
  "branch_id": "LSL",
  "created_at": "2017-08-26T06:29:50.419Z",
  "transaction_amount": "$" + 2345,
  "transaction_type": 5
},
{
  "transaction_id": "a9cefee3167",
  "user_id": "096785",
  "merchant_name": "HUDSON PRIVATE LIMITED",
  "branch_id": "HPL",
  "created_at": "2017-08-31T07:29:29.619Z",
  "transaction_amount": "$" + 2345,
  "transaction_type": 1
},
{
  "transaction_id": "597e86003167",
  "user_id": "345678",
  "merchant_name": "RESOURCES LIMITED",
  "branch_id": "RLT",
  "created_at": "2017-08-26T06:26:29.714Z",
  "transaction_amount": "$" + 4817,
  "transaction_type": 1
}];

function ATransactiondataGEN(input) { 
  return ATransactiondata
};

function dataGENdb(input) {
  return new Promise(); //for db
}
//genweekBody(data,'2017','jan')


///// Merchant Chart///////

//read from db, then send to merchant_index via ejs

module.exports.genweekBody = genweekBody;
module.exports.genYearBody = genYearBody;
module.exports.Mchartdata = Mchartdata;

var Mchartdata =
    {
        "2017":
        {
            'jan':
            {
                'week1Orders': 10,
                'week1income': 20,
                'week2Orders': 20,
                'week2income': 30,
                'week3Orders': 30,
                'week3income': 40,
                'week4Orders': 40,
                'week4income': 50,
            }
            ,
            'feb':
            {
                'week1Orders': 10,
                'week1income': 20,
                'week2Orders': 10,
                'week2income': 20,
                'week3Orders': 10,
                'week3income': 20,
                'week4Orders': 10,
                'week4income': 20,
            }
            ,
            'mar':
            {
                'week1Orders': 10,
                'week1income': 20,
                'week2Orders': 10,
                'week2income': 20,
                'week3Orders': 10,
                'week3income': 20,
                'week4Orders': 10,
                'week4income': 20,
            }
            ,
            'apr':
            {
                'week1Orders': 10,
                'week1income': 20,
                'week2Orders': 10,
                'week2income': 20,
                'week3Orders': 10,
                'week3income': 20,
                'week4Orders': 10,
                'week4income': 20,
            }
            ,
            'may':
            {
                'week1Orders': 10,
                'week1income': 20,
                'week2Orders': 10,
                'week2income': 20,
                'week3Orders': 10,
                'week3income': 20,
                'week4Orders': 10,
                'week4income': 20,
            }
            ,
            'jun':
            {
                'week1Orders': 10,
                'week1income': 20,
                'week2Orders': 10,
                'week2income': 20,
                'week3Orders': 10,
                'week3income': 20,
                'week4Orders': 10,
                'week4income': 20,
            }
            ,
            'jul':
            {
                'week1Orders': 10,
                'week1income': 20,
                'week2Orders': 10,
                'week2income': 20,
                'week3Orders': 10,
                'week3income': 20,
                'week4Orders': 10,
                'week4income': 20,
            }
            ,
            'aug':
            {
                'week1Orders': 10,
                'week1income': 20,
                'week2Orders': 10,
                'week2income': 20,
                'week3Orders': 10,
                'week3income': 20,
                'week4Orders': 10,
                'week4income': 20,
            }
            ,
            'sep':
            {
                'week1Orders': 10,
                'week1income': 20,
                'week2Orders': 10,
                'week2income': 20,
                'week3Orders': 10,
                'week3income': 20,
                'week4Orders': 10,
                'week4income': 20,
            }
            ,
            'oct':
            {
                'week1Orders': 10,
                'week1income': 20,
                'week2Orders': 10,
                'week2income': 20,
                'week3Orders': 10,
                'week3income': 20,
                'week4Orders': 10,
                'week4income': 20,
            }
            ,
            'nov':
            {
                'week1Orders': 10,
                'week1income': 20,
                'week2Orders': 10,
                'week2income': 20,
                'week3Orders': 10,
                'week3income': 20,
                'week4Orders': 10,
                'week4income': 20,
            }
            ,
            'dec':
            {
                'week1Orders': 10,
                'week1income': 20,
                'week2Orders': 10,
                'week2income': 20,
                'week3Orders': 10,
                'week3income': 20,
                'week4Orders': 10,
                'week4income': 20,
            }
            ,
            'janTotalOrder': 100,
            'janIncome': 200,
            'febTotalOrder': 100,
            'febIncome': 200,
            'marTotalOrder': 100,
            'marIncome': 200,
            'aprTotalOrder': 100,
            'aprIncome': 200,
            'mayTotalOrder': 100,
            'mayIncome': 200,
            'junTotalOrder': 100,
            'junIncome': 200,
            'julTotalOrder': 100,
            'julIncome': 200,
            'augTotalOrder': 100,
            'augIncome': 200,
            'sepTotalOrder': 100,
            'sepIncome': 200,
            'octTotalOrder': 100,
            'octIncome': 200,
            'novTotalOrder': 100,
            'novIncome': 200,
            'decTotalOrder': 100,
            'decIncome': 200,
        }

    };


//genweekBody(data,'2017','jan')

function genweekBody(datax, year) { //datax change to data for production
    return new Promise((resolve, reject) => {

        var weekBody = {
            'jan': [{

                "date": "Jan Week 1",
                "totalOrders": Mchartdata[year]['jan'].week1Orders,
                "income": Mchartdata[year]['jan'].week1income
            },
            {

                "date": "Jan Week 2",
                "totalOrders": Mchartdata[year]['jan'].week2Orders,
                "income": Mchartdata[year]['jan'].week2income
            },
            {

                "date":  "Jan Week 3",
                "totalOrders": Mchartdata[year]['jan'].week3Orders,
                "income": Mchartdata[year]['jan'].week3income
            },
            {

                "date": "Jan Week 4",
                "totalOrders": Mchartdata[year]['jan'].week4Orders,
                "income": Mchartdata[year]['jan'].week4income
            }
            ],
            'feb': [{

                "date": "Feb Week 1",
                "totalOrders": Mchartdata[year]['feb'].week1Orders,
                "income": Mchartdata[year]['feb'].week1income
            },
            {

                "date":   "Feb Week 2",
                "totalOrders": Mchartdata[year]['feb'].week2Orders,
                "income": Mchartdata[year]['feb'].week2income
            },
            {

                "date":   "Feb Week 3",
                "totalOrders": Mchartdata[year]['feb'].week3Orders,
                "income": Mchartdata[year]['feb'].week3income
            },
            {

                "date":   "Feb Week 4",
                "totalOrders": Mchartdata[year]['feb'].week4Orders,
                "income": Mchartdata[year]['feb'].week4income
            }
            ],
            'mar': [{

                "date":   "Mar Week 1",
                "totalOrders": Mchartdata[year]['mar'].week1Orders,
                "income": Mchartdata[year]['mar'].week1income
            },
            {

                "date":   "Mar Week 2",
                "totalOrders": Mchartdata[year]['mar'].week2Orders,
                "income": Mchartdata[year]['mar'].week2income
            },
            {

                "date":   "Mar Week 3",
                "totalOrders": Mchartdata[year]['mar'].week3Orders,
                "income": Mchartdata[year]['mar'].week3income
            },
            {

                "date":   "Mar Week 4",
                "totalOrders": Mchartdata[year]['mar'].week4Orders,
                "income": Mchartdata[year]['mar'].week4income
            }
            ],
            'apr': [{

                "date":   "Apr Week 1",
                "totalOrders": Mchartdata[year]['apr'].week1Orders,
                "income": Mchartdata[year]['apr'].week1income
            },
            {

                "date":   "Apr Week 2",
                "totalOrders": Mchartdata[year]['apr'].week2Orders,
                "income": Mchartdata[year]['apr'].week2income
            },
            {

                "date":   "Apr Week 3",
                "totalOrders": Mchartdata[year]['apr'].week3Orders,
                "income": Mchartdata[year]['apr'].week3income
            },
            {

                "date":   "Apr Week 4",
                "totalOrders": Mchartdata[year]['apr'].week4Orders,
                "income": Mchartdata[year]['apr'].week4income
            }
            ],
            'may': [{

                "date":   "May Week 1",
                "totalOrders": Mchartdata[year]['may'].week1Orders,
                "income": Mchartdata[year]['may'].week1income
            },
            {

                "date":   "May Week 2",
                "totalOrders": Mchartdata[year]['may'].week2Orders,
                "income": Mchartdata[year]['may'].week2income
            },
            {

                "date":   "May Week 3",
                "totalOrders": Mchartdata[year]['may'].week3Orders,
                "income": Mchartdata[year]['may'].week3income
            },
            {

                "date":   "May Week 4",
                "totalOrders": Mchartdata[year]['may'].week4Orders,
                "income": Mchartdata[year]['may'].week4income
            }
            ],
            'jun': [{

                "date":   "Jun Week 1",
                "totalOrders": Mchartdata[year]['jun'].week1Orders,
                "income": Mchartdata[year]['jun'].week1income
            },
            {

                "date":   "Jun Week 2",
                "totalOrders": Mchartdata[year]['jun'].week2Orders,
                "income": Mchartdata[year]['jun'].week2income
            },
            {

                "date":   "Jun Week 3",
                "totalOrders": Mchartdata[year]['jun'].week3Orders,
                "income": Mchartdata[year]['jun'].week3income
            },
            {

                "date":   "Jun Week 4",
                "totalOrders": Mchartdata[year]['jun'].week4Orders,
                "income": Mchartdata[year]['jun'].week4income
            }
            ],
            'jul': [{

                "date":   "Jul Week 1",
                "totalOrders": Mchartdata[year]['jul'].week1Orders,
                "income": Mchartdata[year]['jul'].week1income
            },
            {

                "date":   "Jul Week 2",
                "totalOrders": Mchartdata[year]['jul'].week2Orders,
                "income": Mchartdata[year]['jul'].week2income
            },
            {

                "date":   "Jul Week 3",
                "totalOrders": Mchartdata[year]['jul'].week3Orders,
                "income": Mchartdata[year]['jul'].week3income
            },
            {

                "date":   "Jul Week 4",
                "totalOrders": Mchartdata[year]['jul'].week4Orders,
                "income": Mchartdata[year]['jul'].week4income
            }
            ],
            'aug': [{

                "date":   "Aug Week 1",
                "totalOrders": Mchartdata[year]['aug'].week1Orders,
                "income": Mchartdata[year]['aug'].week1income
            },
            {

                "date":   "Aug Week 2",
                "totalOrders": Mchartdata[year]['aug'].week2Orders,
                "income": Mchartdata[year]['aug'].week2income
            },
            {

                "date":   "Aug Week 3",
                "totalOrders": Mchartdata[year]['aug'].week3Orders,
                "income": Mchartdata[year]['aug'].week3income
            },
            {

                "date":   "Aug Week 4",
                "totalOrders": Mchartdata[year]['aug'].week4Orders,
                "income": Mchartdata[year]['aug'].week4income
            }
            ],
            'sep': [{

                "date":   "Sep Week 1",
                "totalOrders": Mchartdata[year]['sep'].week1Orders,
                "income": Mchartdata[year]['sep'].week1income
            },
            {

                "date":   "Sep Week 2",
                "totalOrders": Mchartdata[year]['sep'].week2Orders,
                "income": Mchartdata[year]['sep'].week2income
            },
            {

                "date":   "Sep Week 3",
                "totalOrders": Mchartdata[year]['sep'].week3Orders,
                "income": Mchartdata[year]['sep'].week3income
            },
            {

                "date":   "Sep Week 4",
                "totalOrders": Mchartdata[year]['sep'].week4Orders,
                "income": Mchartdata[year]['sep'].week4income
            }
            ],
            'oct': [{

                "date":   "Oct Week 1",
                "totalOrders": Mchartdata[year]['oct'].week1Orders,
                "income": Mchartdata[year]['oct'].week1income
            },
            {

                "date":   "Oct Week 2",
                "totalOrders": Mchartdata[year]['oct'].week2Orders,
                "income": Mchartdata[year]['oct'].week2income
            },
            {

                "date":   "Oct Week 3",
                "totalOrders": Mchartdata[year]['oct'].week3Orders,
                "income": Mchartdata[year]['oct'].week3income
            },
            {

                "date":   "Oct Week 4",
                "totalOrders": Mchartdata[year]['oct'].week4Orders,
                "income": Mchartdata[year]['oct'].week4income
            }
            ],
        'nov': [{

                "date":   "Nov Week 1",
                "totalOrders": Mchartdata[year]['nov'].week1Orders,
                "income": Mchartdata[year]['nov'].week1income
            },
            {

                "date":   "Nov Week 2",
                "totalOrders": Mchartdata[year]['nov'].week2Orders,
                "income": Mchartdata[year]['nov'].week2income
            },
            {

                "date":   "Nov Week 3",
                "totalOrders": Mchartdata[year]['nov'].week3Orders,
                "income": Mchartdata[year]['nov'].week3income
            },
            {

                "date":   "Nov Week 4",
                "totalOrders": Mchartdata[year]['nov'].week4Orders,
                "income": Mchartdata[year]['nov'].week4income
            }
            ],
        'dec': [{

                "date":   "Dec Week 1",
                "totalOrders": Mchartdata[year]['dec'].week1Orders,
                "income": Mchartdata[year]['dec'].week1income
            },
            {

                "date":   "Dec Week 2",
                "totalOrders": Mchartdata[year]['dec'].week2Orders,
                "income": Mchartdata[year]['dec'].week2income
            },
            {

                "date":   "Dec Week 3",
                "totalOrders": Mchartdata[year]['dec'].week3Orders,
                "income": Mchartdata[year]['dec'].week3income
            },
            {

                "date":   "Dec Week 4",
                "totalOrders": Mchartdata[year]['dec'].week4Orders,
                "income": Mchartdata[year]['dec'].week4income
            }
            ],

        };
        resolve(weekBody);
        console.log("hihihihihi"+weekBody['jan']);
    });
};




function genYearBody(datax, year) { //change back to data from datax when real data is ready
    return new Promise((resolve, reject) => {

        var yearBody = [{

            "date": "Jan",
            "totalOrders": Mchartdata[year].janTotalOrder,
            "income": Mchartdata[year].janIncome
        }, {
            "date": "Feb",
            "totalOrders": Mchartdata[year].febTotalOrder,
            "income": Mchartdata[year].febIncome
        }, {
            "date": "Mar",
            "totalOrders": Mchartdata[year].marTotalOrder,
            "income": Mchartdata[year].marIncome
        }, {
            "date": "Apr",
            "totalOrders": Mchartdata[year].aprTotalOrder,
            "income": Mchartdata[year].aprIncome
        }, {
            "date": "May",
            "totalOrders": Mchartdata[year].mayTotalOrder,
            "income": Mchartdata[year].mayIncome
        }, {
            "date": "Jun",
            "totalOrders": Mchartdata[year].junTotalOrder,
            "income": Mchartdata[year].junIncome
        }, {
            "date": "Jul",
            "totalOrders": Mchartdata[year].julIncome,
            "income": Mchartdata[year].julIncome
        }, {
            "date": "Aug",
            "totalOrders": Mchartdata[year].augTotalOrder,
            "income": Mchartdata[year].augIncome
        }, {
            "date": "Sep",
            "totalOrders": Mchartdata[year].sepTotalOrder,
            "income": Mchartdata[year].sepIncome
        }, {
            "date": "Oct",
            "totalOrders": Mchartdata[year].octTotalOrder,
            "income": Mchartdata[year].octIncome
        }, {
            "date": "Nov",
            "totalOrders": Mchartdata[year].novTotalOrder,
            "income": Mchartdata[year].novIncome
        }, {
            "date": "Dec",
            "totalOrders": Mchartdata[year].decTotalOrder,
            "income": Mchartdata[year].decIncome
        }
        ];
        resolve(yearBody);
        console.log(yearBody)
    });
};







