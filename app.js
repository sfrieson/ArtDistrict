var express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  mongoConnect = 'mongodb://localhost/ny',
  Business = require('./models/business.js');

// ---------- db ---------- //
mongoose.connect(mongoConnect);


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

var businessRouter = require('./routes/businesses.js');
app.use('/businesses', businessRouter)

// ---------- listen ---------- //
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('hi, ', port);
});
