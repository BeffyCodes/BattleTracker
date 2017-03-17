var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes.js');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/battletracker');
app.use(express.static('../_app'));
app.use('/_api', routes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});