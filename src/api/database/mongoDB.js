var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://127.0.0.1/lxModule');

mongoose.connection.on('error', (error) => {
  console.error('connection error: s%', error);
});

module.exports = db;
