'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Anna and Dave\nand Teri and Chris\nand Ceu and Fede!');
});

var server = app.listen(8000);
