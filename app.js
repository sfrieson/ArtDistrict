var express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  mongoConnect = 'mongodb://localhost/mapInfo';

// ---------- db ---------- //
mongoose.connect(mongoConnect);

// ---------- yelp ---------- //
var Yelp = require('yelp');
var yelp = new Yelp({
  consumer_key: process.env.CONSUMERKEY,
  consumer_secret: process.env.CONSUMERSECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKENSECRET
});

// ---------- middleware ---------- //

require('dotenv').load();

var morgan = require('morgan');
app.use(morgan('dev'));

app.use(express.static('./public'));

app.set('view engine', 'jade');

// ---------- route ---------- //
app.get('/', function(req, res) {
  res.render('index');
});

// ---------- listen ---------- //
var port = 8080;
app.listen(port, function() {
  console.log('hi, ', port);
});
