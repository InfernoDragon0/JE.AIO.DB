var ejs = require('ejs'); //ejs is not express, but is a extension to express
var path = require("path"); //pathing system
var bodyParser = require('body-parser'); //parse POST data
var session = require('express-session'); //temporary to store sensitive data, see if theres better way
const database = require("./nodemodjs/DBReader.js");
const express = require('express'); //express is good
const app = express();
const port = 5101;

app.engine('html', require('ejs').renderFile); //can use jsx also
app.use(session({
    secret: 'whatsecretshallweuse kitten',//session secret to sign sessions
    resave: true, //force save
    saveUninitialized: true,
    /*cookie: { secure: true }*/
})); //secure needs HTTPS, cookies will not be stored if running from HTTP with this option
app.use(bodyParser.json()); // supporting POST data
app.use(bodyParser.urlencoded({ extended: true })); // supportting POST data

/**
 * evals js/css/img folders for JS/CSS/image files
 */
app.use(express.static(path.join(__dirname, '/assets')));

app.listen(process.env.PORT || port);
console.log("Listening on port " + port);

app.post('/', function (req, res) { //base page
    res.render(path.join(__dirname + '/html/merchant_index.html'));
});

app.get('/', function (req, res) { //base page
    //dbreader(res)...

    database.genweekBody(database.data, "2017").then((weekvalue) => {
        database.genYearBody(database.data, "2017").then((yearvalue) => { 
            res.render(path.join(__dirname + '/html/merchant_index.html'),
            {
                weekbody: JSON.stringify(weekvalue),
                yearbody: JSON.stringify(yearvalue)
            });
        })
        
    })
    

    
});

app.get('/login', function (req, res) { //base page
    res.render(path.join(__dirname + '/html/merchant_login.html'));
});

app.get('/lock2', function (req, res) { //base page
    res.render(path.join(__dirname + '/html/page_user_lock_2.html'));
});

 app.use(function (req, res, next) {
        res.status(404).send("There is no page here! :c")
});
