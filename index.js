'use strict';

var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  var readFile = __dirname + '/public/templates/index.html';
  var fileContents = fs.readFileSync(readFile);
  res.send(fileContents.toString());
});

var server = app.listen(8080);
