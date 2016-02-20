var Business = require('../models/business.js');
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: process.env.CONSUMERKEY,
  consumer_secret: process.env.CONSUMERSECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKENSECRET
});

function get (location, offset) {
    yelp.search({ location: location, sort:"0", offset: offset})
    .then(function(data){
      console.log(data, 'data');
      parseData(data);
    })
    .catch(function(err){
      console.log(err);
  });
}

var states = [AL, AK, AZ, AR, CA, CO, CT, DE, FL, GA, HI, ID, IL, IN, IA, KS, KY, LA, ME, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, NC, ND, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VT, VA, WA, WV, WI, WY];
function parseData (data){
  for(var i=0;i<states.length;i++){
    setTimeout(function(){
      var offset = 0;
      get(sates[i],offset);

    }, 5000)
  }
}

function submitData (data) {

}
