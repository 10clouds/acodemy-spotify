var angularFilesort = require('gulp-angular-filesort');
var bowerFiles = require('main-bower-files');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var es = require('event-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var inject = require('gulp-inject');
var ngAnnotate = require('gulp-ng-annotate');
var templateCache = require('gulp-angular-templatecache');
var uglify = require('gulp-uglify');

gulp.task('connect', function() {
  connect.server({
    port: 8888,
    livereload: true,
    root: 'src'
  });
});

gulp.task('files', function () {
  return gulp
    .src('./src/**')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  return gulp
    .watch(
      ['./src/**'],
      ['coffee', 'files']
    );
});

gulp.task('coffee', function() {
  return gulp
    .src('./src/**/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./src/tmp/coffee/'))
});

gulp.task('index', function () {
  return gulp
    .src('./src/index.html')
    .pipe(inject(gulp.src(bowerFiles(), {read: false}),{
        name: 'bower',
        ignorePath: 'src',
        addRootSlash: false
    }))
    .pipe(inject(es.merge(
      gulp
        .src(['./src/**/*.js', './src/**/*.css', '!./src/bower/**'], {read: false})
        .pipe(angularFilesort())
      ),
      {
        ignorePath: 'src',
        addRootSlash: false
      }
    ))
    .pipe(gulp.dest('./src/'));
});


gulp.task('vendor', function() {
  return gulp
    .src(bowerFiles({
      filter: /\.js$/i
    }))
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'))
});

gulp.task('scripts', ['templateCache'], function() {
  return gulp
    .src(['./src/**/*.js', '!./src/bower/**', './dist/templates.js'])
    .pipe(concat('scripts.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'))
});

gulp.task('copyFonts', function() {
  return gulp
    .src('./src/bower/font-awesome/fonts/**')
    .pipe(gulp.dest('./dist/fonts'))
});

gulp.task('styles', function() {
  return gulp
    .src(['./src/**/*.css', '!./src/bower/**'])
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./dist/css/'))
});

gulp.task('vendorStyles', function() {
  return gulp
    .src(bowerFiles({
      filter: /\.css$/i
    }))
    .pipe(concat('bower.css'))
    .pipe(gulp.dest('./dist/css/'))
});

gulp.task('templateCache', function () {
  return gulp
    .src(['./src/**/*.html', '!./src/index.html', '!./src/bower/**'])
    .pipe(templateCache({
      module: 'acodemy-app'
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('mergeCompiled', ['styles', 'vendor', 'vendorStyles', 'copyFonts', 'scripts'], function() {
  return gulp
    .src('./src/index.html')
    .pipe(inject(gulp.src(
      './dist/css/bower.css', {read: false}),
      {name: 'bower', ignorePath: 'dist', addRootSlash: false}
    ))
    .pipe(inject(gulp.src(
      './dist/css/styles.css', {read: false}),
      {ignorePath: 'dist', addRootSlash: false}
    ))
    .pipe(inject(gulp.src(
      './dist/js/vendor.js', {read: false}),
      {name: 'bower', ignorePath: 'dist',  addRootSlash: false}
    ))
    .pipe(inject(gulp.src(
      './dist/js/scripts.js', {read: false}),
      {ignorePath: 'dist',  addRootSlash: false}
    ))
    .pipe(gulp.dest('./dist/'))
});



gulp.task('default', ['connect', 'index', 'watch']);
gulp.task('build', ['mergeCompiled']);
