var Business = require('../models/business.js');
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: process.env.CONSUMERKEY,
  consumer_secret: process.env.CONSUMERSECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKENSECRET
});

function get () {
    yelp.search({ term:'',category_filter: 'museums', location: req.query.location || "new+york", sort:"0"})
    .then(function(data){
      console.log(data, 'data');
      parseData(data);
    })
    .catch(function(err){
      console.log(err);
  });
}


function parseData (data){

}

function submitData (data) {

}
