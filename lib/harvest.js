var Business = require('../models/business.js');
var Yelp = require('yelp');
var Categories = require('./categories.js');
require('dotenv').load();
//weeee
mongoose = require('mongoose');
mongoConnect = 'mongodb://localhost/ny';

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
var m = 0;
var offset = 0;
var limit = 1000;
var states = ["10001", "10453","10457", "10460","10458", "10467", "10468", "10451", "10452", "10456", "10454", "10455", "10459", "10474", "10463", "10471", "10466", "10469", "10470", "10475", "10461", "10462", "10464", "10465", "10472", "10473", "11212", "11213", "11216", "11233", "11238", "11209", "11214", "11228", "11204", "11218", "11219", "11230", "11234", "11236", "11239", "11223", "11224", "11229", "11235", "11201", "11205", "11215", "11217", "11231", "11203", "11210", "11225", "11226", "11207", "11208", "11211", "11222", "11220", "11232", "11206", "11221", "11237", "10026", "10027", "10030", "10037", "10039",  "10011", "10018", "10019", "10020", "10036", "10029", "10035", "10010", "10016", "10017", "10022", "10012", "10013", "10014", "10004", "10005", "10006", "10007", "10038", "10280", "10002", "10003", "10009", "10021", "10028", "10044", "10065", "10075", "10128", "10023", "10024", "10025", "10031", "10032", "10033", "10034", "10040", "11361", "11362", "11363", "11364" ,"11354", "11355", "11356", "11357", "11358", "11359", "11360", "11365", "11366", "11367", "11412", "11423", "11432", "11433", "11434", "11435", "11436", "11101", "11102", "11103", "11104", "11105", "11106" ,"11374", "11375", "11379", "11385", "11691", "11692", "11693", "11694", "11695", "11697" ,"11004", "11005", "11411", "11413", "11422", "11426", "11427", "11428", "11429", "11414", "11415", "11416", "11417", "11418", "11419", "11420", "11421", "11368", "11369", "11370", "11372", "11373", "11377", "11378", "10302", "10303", "10310", "10306", "10307", "10308", "10309", "10312", "10301", "10304", "10305", "10314"]
// var states = ["NY"];
var interval = setInterval(function(){
    get();
}, 3600);


var mains = ['active', 'arts', 'auto', 'beautysvc', 'bicycles', 'education', 'eventservices', 'financialservices', 'food', 'health', 'homeservices', 'hotelstravel', 'localflavor', 'localservices', 'massmedia', 'nightlife', 'pets', 'professional', 'publicservicesgovt', 'religiousorgs', 'restaurants', 'shopping'];

function get () {
    var location = states[i];
    yelp.search({ location: location, category_filter: mains[m], sort:"0", offset: offset})
    .then(function(data){
        parseData(data.businesses);
        limit=data.total;
        console.log("\n\n--------------------------New Request---------------------\n\n", 'State: ' + location, '\nCategory: ' + mains[m],'\nOffset: ' + offset + "/" + limit);
        offset+=20;
        console.log(i,"i","states[i]",states[i]);
        if(offset>limit){
          offset = 0; //reset offset
          m++; //start getting next category

          if (m === mains.length){ //if out of categories then stop getting.
              console.log(
                  "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n" +
                  "Done getting all categories for " + states[i]
              );
                i++; //start getting next zipcode
                m=0;
          }
            if(i===states.length){
                clearInterval(interval);
            }
        }
    })
    .catch(function(err){
        console.error(err);//reached 1000 pieces of data

        offset = 0; //reset offset
        m++; //start getting next category

        if (m === mains.length){ //if out of categories then stop getting.
            clearInterval(interval);
            console.log(
                "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n" +
                "Done getting all categories for " + states[i]
            );
        }
    });
}

function parseData (data){
    var objarray=[];
    for(var i = 0;i<data.length;i++){
        if(data[i].location.coordinate){ //check if it has coordinates
            var obj = {
                lat : data[i].location.coordinate.latitude,
                lon : data[i].location.coordinate.longitude,
                category : ( Categories.findParent(data[i].categories[0][1]) ).title,
                tags: []
            };
            for(var h=0; h<data[i].categories.length; h++){
                obj.tags.push(data[i].categories[h][0]);
            }
            objarray.push(obj);
        }
    }
    submitData (objarray);
}

function submitData (data) {
    Business.collection.insert(data,{},function(err,res){
        console.log('\nInsert Error: ', err);
    });
}
