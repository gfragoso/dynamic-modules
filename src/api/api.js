var cors = require('cors'),
  express = require('express'),
  bodyParser = require('body-parser'),
  moduleRoute = require('./routes/module');

var api = express();

api.use(cors());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

api.use('/api', moduleRoute);

module.exports = api;
