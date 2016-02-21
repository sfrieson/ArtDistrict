var Business = require('../models/business.js');
var Yelp = require('yelp');
var Categories = require('./categories.js');
require('dotenv').load();
//weeee
mongoose = require('mongoose');
mongoConnect = 'mongodb://localhost/test';

// ---------- db ---------- //
mongoose.connect(mongoConnect);

//weeee ends



var yelp = new Yelp({
  consumer_key: process.env.CONSUMERKEY,
  consumer_secret: process.env.CONSUMERSECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKENSECRET
});

var i = 0;
var offset = 0;
var limit = 1000;
var states = ["NY"];
var interval = setInterval(function(){
  get();
}, 3600);

// setTimeout(function(){
//   clearInterval(interval);
// }, 10000);

function get () {
  var location = states[i];
    yelp.search({ location: location, sort:"0", offset: offset})
    .then(function(data){
      parseData(data.businesses);
      limit=data.total;
      console.log(limit,'limit');
      offset+=20;
      if(offset>limit){
          clearInterval(interval);
        offset=0;
        i++;
        if(i===states.length){
          i=0;
        }
      }
    })
    .catch(function(err){
      console.log(err);
  });
}

function parseData (data){
    var objarray=[];
    for(var i = 0;i<data.length;i++){
        console.log( data[i].categories[0][1] );
      objarray[i] = {
        lat : data[i].location.coordinate.latitude,
        lon : data[i].location.coordinate.longitude,
        category : ( Categories.findParent(data[i].categories[0][1]) ).title,
        tags: []
    };
      for(var h=0; h<data[i].categories.length; h++){
        objarray[i].tags.push(data[i].categories[h][0]);
      }
    }
    submitData (objarray);
}

function submitData (data) {
  Business.collection.insert(data,{},function(err,res){
        console.log(err,'err');
        console.log(res,"res");
    });
}
