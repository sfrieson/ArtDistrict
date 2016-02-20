require('dotenv').load();
var express = require('express');
var router = express.Router();
var Yelp = require('yelp');


var yelp = new Yelp({
  consumer_key: process.env.CONSUMERKEY,
  consumer_secret: process.env.CONSUMERSECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKENSECRET
});

router.get('/search', function(req,res){
    yelp.search({ term:'',category_filter: 'museums', location: req.query.location || "new+york", sort:"0"})
    .then(function(data){
      console.log(data, 'data');
      res.json(data)
    })
    .catch(function(err){
      console.log(err);
    })
