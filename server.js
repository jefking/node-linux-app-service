var express = require('express');
var bodyParser = require("body-parser");
var favicon = require('serve-favicon');
var appInsights = require("applicationinsights");

appInsights.setup("90613a9e-38d3-4492-9062-73e9c19595d0").start();

var app = express();
app.use(favicon(__dirname + '/favicon.ico'));
app.use(favicon(__dirname + '/fav.ico'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//var expressPort = process.env.PORT || 8080;
var expressPort = 80 || 8080;

var router = express.Router();

app.get('/', function (req, res) {
	res.type('text/plain');
	res.send("alive");
});

app.use('/', router);

app.listen(expressPort);