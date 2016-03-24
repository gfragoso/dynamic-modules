var mongoose = require('mongoose');

var schema = mongoose.Schema({
  files: [],
  name: String,
  displayName: String,
  defaultRoute: String
});

var Module = mongoose.model("module", schema);

module.exports = Module;
