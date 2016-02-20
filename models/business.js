var mongoose = require('mongoose');

var BusinessSchema = mongoose.Schema({
  lat:       {type: String},
  lon:       {type: String},
  category:  {type: String},
  tags:      {type: Array}
});


module.exports = BusinessSchema;
