var mongoose = require('./../database/mongoDB');

var schema = mongoose.Schema({
  name: String,
  files: []
});

var Module = mongoose.model("module", schema);

module.exports = Module;
