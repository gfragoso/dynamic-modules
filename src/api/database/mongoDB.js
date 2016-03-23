var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/lxModule');

mongoose.connection.once("open", () => {
  console.log("conectads");
});

mongoose.connection.on('error', (error) => {
  console.error('connection error: s%', error);
});

module.exports = mongoose;
