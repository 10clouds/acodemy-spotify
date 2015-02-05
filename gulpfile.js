var gulp = require('gulp');
var connect = require('gulp-connect');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');

gulp.task('connect', function() {
  connect.server({
    port: 8888,
    livereload: true,
    root: 'src'
  });
});

gulp.task('files', function () {
  gulp.src('./src/**')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(
    ['./src/**'],
    ['coffee', 'files']
  );
});

gulp.task('coffee', function() {
  gulp.src('./src/**/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./tmp/coffee/'))
});


gulp.task('default', ['connect', 'watch']);
