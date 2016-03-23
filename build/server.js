var gulp = require('gulp'),
  server = require('gulp-express'),
  browserSync = require('browser-sync').create();

gulp.task('serverDev', ['start-site', 'start-api']);

gulp.task('start-site', () => {
  browserSync.init({
    notify: false,
    port: 8080,
    server: {
      index: 'index.html',
      baseDir: './src/app/'
    }
  });
});

gulp.task('start-api', () => {
  server.run(['./src/api/server.js']);
});
