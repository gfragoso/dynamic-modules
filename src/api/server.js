var api = require('./api');

var config = {
  ip: '127.0.0.1',
  port: process.env.PORT || 8000
};

api.listen(config.port, config.ip, (err) => {
  if (err) {
    console.log('Unable to listening for connections %s', err);
    process.exit(10);
  }
  console.log('express listen on  http://%s:%s', config.ip, config.port);
});
