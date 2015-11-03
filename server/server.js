var express = require('express');
var bodyParser = require('body-parser');
// var twitter = require('./twitter.js');
var app = express();
var apiRouter = require('./apiRouter.js');
var mongoose = require('mongoose');
// app.use(bodyParser.json());
// var apiRouter = app.Router();

var logger = function (request, response, next) {
  console.log('Client hit: ' + request.url);
  next();
};

mongoose.connect('mongodb://localhost/druthers');

app.use(express.static(__dirname + '/../client'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', logger, apiRouter);


app.listen('9000', function() {
  console.log('listening on 9000');
});
