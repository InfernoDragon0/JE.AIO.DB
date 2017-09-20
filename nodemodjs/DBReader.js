//read from db, then send to merchant_index via ejs

module.exports.genweekBody = genweekBody;
module.exports.genYearBody = genYearBody;
module.exports.data = data;

var data =
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
                "totalOrders": data[year]['jan'].week1Orders,
                "income": data[year]['jan'].week1income
            },
            {

                "date": "Jan Week 2",
                "totalOrders": data[year]['jan'].week2Orders,
                "income": data[year]['jan'].week2income
            },
            {

                "date":  "Jan Week 3",
                "totalOrders": data[year]['jan'].week3Orders,
                "income": data[year]['jan'].week3income
            },
            {

                "date": "Jan Week 4",
                "totalOrders": data[year]['jan'].week4Orders,
                "income": data[year]['jan'].week4income
            }
            ],
            'feb': [{

                "date": "Feb Week 1",
                "totalOrders": data[year]['feb'].week1Orders,
                "income": data[year]['feb'].week1income
            },
            {

                "date":   "Feb Week 2",
                "totalOrders": data[year]['feb'].week2Orders,
                "income": data[year]['feb'].week2income
            },
            {

                "date":   "Feb Week 3",
                "totalOrders": data[year]['feb'].week3Orders,
                "income": data[year]['feb'].week3income
            },
            {

                "date":   "Feb Week 4",
                "totalOrders": data[year]['feb'].week4Orders,
                "income": data[year]['feb'].week4income
            }
            ],
            'mar': [{

                "date":   "Mar Week 1",
                "totalOrders": data[year]['mar'].week1Orders,
                "income": data[year]['mar'].week1income
            },
            {

                "date":   "Mar Week 2",
                "totalOrders": data[year]['mar'].week2Orders,
                "income": data[year]['mar'].week2income
            },
            {

                "date":   "Mar Week 3",
                "totalOrders": data[year]['mar'].week3Orders,
                "income": data[year]['mar'].week3income
            },
            {

                "date":   "Mar Week 4",
                "totalOrders": data[year]['mar'].week4Orders,
                "income": data[year]['mar'].week4income
            }
            ],
            'apr': [{

                "date":   "Apr Week 1",
                "totalOrders": data[year]['apr'].week1Orders,
                "income": data[year]['apr'].week1income
            },
            {

                "date":   "Apr Week 2",
                "totalOrders": data[year]['apr'].week2Orders,
                "income": data[year]['apr'].week2income
            },
            {

                "date":   "Apr Week 3",
                "totalOrders": data[year]['apr'].week3Orders,
                "income": data[year]['apr'].week3income
            },
            {

                "date":   "Apr Week 4",
                "totalOrders": data[year]['apr'].week4Orders,
                "income": data[year]['apr'].week4income
            }
            ],
            'may': [{

                "date":   "May Week 1",
                "totalOrders": data[year]['may'].week1Orders,
                "income": data[year]['may'].week1income
            },
            {

                "date":   "May Week 2",
                "totalOrders": data[year]['may'].week2Orders,
                "income": data[year]['may'].week2income
            },
            {

                "date":   "May Week 3",
                "totalOrders": data[year]['may'].week3Orders,
                "income": data[year]['may'].week3income
            },
            {

                "date":   "May Week 4",
                "totalOrders": data[year]['may'].week4Orders,
                "income": data[year]['may'].week4income
            }
            ],
            'jun': [{

                "date":   "Jun Week 1",
                "totalOrders": data[year]['jun'].week1Orders,
                "income": data[year]['jun'].week1income
            },
            {

                "date":   "Jun Week 2",
                "totalOrders": data[year]['jun'].week2Orders,
                "income": data[year]['jun'].week2income
            },
            {

                "date":   "Jun Week 3",
                "totalOrders": data[year]['jun'].week3Orders,
                "income": data[year]['jun'].week3income
            },
            {

                "date":   "Jun Week 4",
                "totalOrders": data[year]['jun'].week4Orders,
                "income": data[year]['jun'].week4income
            }
            ],
            'jul': [{

                "date":   "Jul Week 1",
                "totalOrders": data[year]['jul'].week1Orders,
                "income": data[year]['jul'].week1income
            },
            {

                "date":   "Jul Week 2",
                "totalOrders": data[year]['jul'].week2Orders,
                "income": data[year]['jul'].week2income
            },
            {

                "date":   "Jul Week 3",
                "totalOrders": data[year]['jul'].week3Orders,
                "income": data[year]['jul'].week3income
            },
            {

                "date":   "Jul Week 4",
                "totalOrders": data[year]['jul'].week4Orders,
                "income": data[year]['jul'].week4income
            }
            ],
            'aug': [{

                "date":   "Aug Week 1",
                "totalOrders": data[year]['aug'].week1Orders,
                "income": data[year]['aug'].week1income
            },
            {

                "date":   "Aug Week 2",
                "totalOrders": data[year]['aug'].week2Orders,
                "income": data[year]['aug'].week2income
            },
            {

                "date":   "Aug Week 3",
                "totalOrders": data[year]['aug'].week3Orders,
                "income": data[year]['aug'].week3income
            },
            {

                "date":   "Aug Week 4",
                "totalOrders": data[year]['aug'].week4Orders,
                "income": data[year]['aug'].week4income
            }
            ],
            'sep': [{

                "date":   "Sep Week 1",
                "totalOrders": data[year]['sep'].week1Orders,
                "income": data[year]['sep'].week1income
            },
            {

                "date":   "Sep Week 2",
                "totalOrders": data[year]['sep'].week2Orders,
                "income": data[year]['sep'].week2income
            },
            {

                "date":   "Sep Week 3",
                "totalOrders": data[year]['sep'].week3Orders,
                "income": data[year]['sep'].week3income
            },
            {

                "date":   "Sep Week 4",
                "totalOrders": data[year]['sep'].week4Orders,
                "income": data[year]['sep'].week4income
            }
            ],
            'oct': [{

                "date":   "Oct Week 1",
                "totalOrders": data[year]['oct'].week1Orders,
                "income": data[year]['oct'].week1income
            },
            {

                "date":   "Oct Week 2",
                "totalOrders": data[year]['oct'].week2Orders,
                "income": data[year]['oct'].week2income
            },
            {

                "date":   "Oct Week 3",
                "totalOrders": data[year]['oct'].week3Orders,
                "income": data[year]['oct'].week3income
            },
            {

                "date":   "Oct Week 4",
                "totalOrders": data[year]['oct'].week4Orders,
                "income": data[year]['oct'].week4income
            }
            ],
        'nov': [{

                "date":   "Nov Week 1",
                "totalOrders": data[year]['nov'].week1Orders,
                "income": data[year]['nov'].week1income
            },
            {

                "date":   "Nov Week 2",
                "totalOrders": data[year]['nov'].week2Orders,
                "income": data[year]['nov'].week2income
            },
            {

                "date":   "Nov Week 3",
                "totalOrders": data[year]['nov'].week3Orders,
                "income": data[year]['nov'].week3income
            },
            {

                "date":   "Nov Week 4",
                "totalOrders": data[year]['nov'].week4Orders,
                "income": data[year]['nov'].week4income
            }
            ],
        'dec': [{

                "date":   "Dec Week 1",
                "totalOrders": data[year]['dec'].week1Orders,
                "income": data[year]['dec'].week1income
            },
            {

                "date":   "Dec Week 2",
                "totalOrders": data[year]['dec'].week2Orders,
                "income": data[year]['dec'].week2income
            },
            {

                "date":   "Dec Week 3",
                "totalOrders": data[year]['dec'].week3Orders,
                "income": data[year]['dec'].week3income
            },
            {

                "date":   "Dec Week 4",
                "totalOrders": data[year]['dec'].week4Orders,
                "income": data[year]['dec'].week4income
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
            "totalOrders": data[year].janTotalOrder,
            "income": data[year].janIncome
        }, {
            "date": "Feb",
            "totalOrders": data[year].febTotalOrder,
            "income": data[year].febIncome
        }, {
            "date": "Mar",
            "totalOrders": data[year].marTotalOrder,
            "income": data[year].marIncome
        }, {
            "date": "Apr",
            "totalOrders": data[year].aprTotalOrder,
            "income": data[year].aprIncome
        }, {
            "date": "May",
            "totalOrders": data[year].mayTotalOrder,
            "income": data[year].mayIncome
        }, {
            "date": "Jun",
            "totalOrders": data[year].junTotalOrder,
            "income": data[year].junIncome
        }, {
            "date": "Jul",
            "totalOrders": data[year].julIncome,
            "income": data[year].julIncome
        }, {
            "date": "Aug",
            "totalOrders": data[year].augTotalOrder,
            "income": data[year].augIncome
        }, {
            "date": "Sep",
            "totalOrders": data[year].sepTotalOrder,
            "income": data[year].sepIncome
        }, {
            "date": "Oct",
            "totalOrders": data[year].octTotalOrder,
            "income": data[year].octIncome
        }, {
            "date": "Nov",
            "totalOrders": data[year].novTotalOrder,
            "income": data[year].novIncome
        }, {
            "date": "Dec",
            "totalOrders": data[year].decTotalOrder,
            "income": data[year].decIncome
        }
        ];
        resolve(yearBody);
        console.log(yearBody)
    });
};



