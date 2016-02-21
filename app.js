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

app.get('/businesses', function(req, res) {
  Business.find({}, "lat lon", function(err, response) {
    res.json(response);
  });

});

app.get('/businesses/:query', function(req, res){
  var query = req.params.query
  Business.find({'category': query}, "lat lon", function(err, response){
    res.json({'businesses': response})
  })
})

// ---------- listen ---------- //
var port = 8080;
app.listen(port, function() {
  console.log('hi, ', port);
});
