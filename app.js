require('dotenv').load();
var express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  mongoConnect = 'mongodb://localhost/' + process.env.DB,
  Business = require('./models/business.js'),
  bodyParser = require('body-parser');

// ---------- db ---------- //
mongoose.connect(mongoConnect);


// ---------- middleware ---------- //


var morgan = require('morgan');
app.use(morgan('dev'));

app.use(express.static('./public'));

app.set('view engine', 'jade');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// ---------- route ---------- //
app.get('/', function(req, res) {
  res.render('index');
});

var businessRouter = require('./routes/businesses.js');
app.use('/businesses', businessRouter);

// ---------- listen ---------- //
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('hi, ', port);
});
