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
    res.json({"message": "Hello json"});
}

































 module.exports = app;
