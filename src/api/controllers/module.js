var LxModule = require('../models/module');

module.exports = {
  getAll: function(req, res) {
    LxModule.find(function(err, docs) {
      if (err) {
        res.send(err);
      } else {
        res.json(docs);
      }
    });
  },

  create: function(req, res) {
    var current = new LxModule(req.body);
    current.save((err) => {
      if (err)
        res.send(err)
      else
        res.status(200).send({
          success: true
        });
    });
  }
};
