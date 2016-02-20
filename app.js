var express = require('express'),
    app = express(),
    router = express.Router(),
    mongoose = require('express'),
    mongoConnect = 'mongodb://localhost/mapInfo';


mongoose.connect(mongoConnect);

require('dotenv').load();

app.use();

var express = require('express');
var router = express.Router();
var Yelp = require('yelp');


var yelp = new Yelp({
  consumer_key: process.env.CONSUMERKEY,
  consumer_secret: process.env.CONSUMERSECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKENSECRET
});

router.get('/', function(req,res){
    res.render();
});
