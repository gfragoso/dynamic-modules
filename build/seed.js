var gulp = require('gulp'),
  db = require('../src/api/database/mongoDB');

gulp.task('seed', (cb) => {
  var Module = require('../src/api/models/module');
  var seed_module = require('./seeds/seed_modules.json');

  if (seed_module && seed_module.length)
    Module.collection.insert(seed_module);

  db.connection.close();

  cb();
});
