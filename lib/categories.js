//Linked List-esque array of 1247 Yelp categories
var categories = require("../vendor/yelp_categories.min.js");


categories.find = function(alias) {
    for(var i = 0; i < this.length; i++){
        if(this[i].alias === alias){
            // console.log(this[i]);
            return this[i];
        }
    }
};


// categories.findMains = function() {
//     for (var i = 0; i < this.length; i++) {
//         if(this[i].parents.length === 0){
//             mains.push(this[i].alias);
//         }
//     }
//     console.log(mains);
// };

var mains = ['active', 'arts', 'auto', 'beautysvc', 'bicycles', 'education', 'eventservices', 'financialservices', 'food', 'health', 'homeservices', 'hotelstravel', 'localflavor', 'localservices', 'massmedia', 'nightlife', 'pets', 'professional', 'publicservicesgovt', 'religiousorgs', 'restaurants', 'shopping'];


categories.findParent = function(tag) {
    var category = this.find(tag);
    if(category.parents.length === 0) {
        return category;
    }
    else {
        return this.findParent(category.parents[0]);
    }
};
module.exports = categories;
