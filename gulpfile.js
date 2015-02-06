var angularFilesort = require('gulp-angular-filesort');
var bowerFiles = require('main-bower-files');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var es = require('event-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var inject = require('gulp-inject');
var minifyCSS = require('gulp-minify-css');
var ngAnnotate = require('gulp-ng-annotate');
var rimraf = require('rimraf');
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
  gulp
    .watch(
      ['./src/**/*.coffee'],
      ['coffee']
    );
  return gulp
    .watch(
      ['./src/**'],
      ['files']
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


gulp.task('clearDist', function() {
  return rimraf.sync('./dist', function (err) {
    if (err) { throw err; }
  });
});

gulp.task('mergeImports', function() {
  gulp
    .src(bowerFiles({
      filter: /\.css$/i
    }))
    .pipe(concat('bower.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/css/'))
  gulp
    .src(['./src/**/*.css', '!./src/bower/**'])
    .pipe(concat('styles.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/css/'))
  gulp
    .src(bowerFiles({
      filter: /\.js$/i
    }))
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'))
  return gulp
    .src(['./src/**/*.html', '!./src/index.html', '!./src/bower/**'])
    .pipe(templateCache({
      module: 'acodemy-app'
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('scripts', ['mergeImports'], function() {
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

gulp.task('mergeCompiled', ['copyFonts', 'scripts'], function() {
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

gulp.task('clearTemplatesJS', ['mergeCompiled'], function() {
  return rimraf('./dist/templates.js', function (err) {
    if (err) { throw err; }
  });
});



gulp.task('default', ['connect', 'index', 'watch']);
gulp.task('build', ['clearDist', 'clearTemplatesJS']);
