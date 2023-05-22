require('dotenv').config();
let express = require('express');
let app = express();

console.log("Hello World");

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

































 module.exports = app;
