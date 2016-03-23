var router = require('express').Router(),
  controller = require('../controllers/module');

router.get('/module', controller.getAll);
router.post('/module', controller.create);

module.exports = router;
