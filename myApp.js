require('dotenv').config();
let express = require('express');
let app = express();

console.log("Hello World");

app.use(reqLogger);
function reqLogger(req, res, next) {
    let logMethod = req.method;
    let logPath = req.path;
    let logIp = req.ip;
    console.log(logMethod + ' ' + logPath + ' - ' + logIp);

    next();
}


app.get('/', rootPage);
function rootPage(req, res) {
    res.sendFile(__dirname + '/views/index.html');
}

app.use('/public', express.static(__dirname + '/public'));

app.get('/json',serveJson);
function serveJson(req, res) {
    if(process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message": "Hello json".toUpperCase()});
    } else {
        res.json({"message": "Hello json"})
    }   
}

//Chain Middleware to Create a Time Server
app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.send({time: req.time});
});

//Get Route Parameter Input from the Client
app.get('/:word/echo', (req, res) => {
    res.json({"echo": req.params.word});
})

//Get Query Parameter Input from the Client
app.get('/name', (req, res) => {
    res.json({"name": req.query.first + ' ' + req.query.last})
})































 module.exports = app;
