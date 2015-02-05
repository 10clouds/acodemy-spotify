var gulp = require('gulp');
var connect = require('gulp-connect');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var es = require('event-stream');
var angularFilesort = require('gulp-angular-filesort');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');

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
  gulp
    .src('./src/**/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./src/tmp/coffee/'))
});

gulp.task('index', function () {
  gulp
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



gulp.task('ngAnnotate', function () {
  gulp.src('src/app.js')
    .pipe(ngAnnotate())
    .pipe(gulp.dest('dist'));
});

gulp.task('vendor', function() {
  gulp.src(bowerFiles({
      filter: /\.js$/i
    }))
    .pipe(uglify())
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('scripts', function() {
  gulp.src(['./src/**/*.js', '!./src/bower/**'])
    .pipe(uglify())
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('styles', function() {
  gulp.src(['./src/**/*.css', '!./src/bower/**'])
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('vendorStyles', function() {
  gulp.src(bowerFiles({
      filter: /\.css$/i
    }))
    .pipe(concat('bower.css'))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('mergeCompiled', function() {
  gulp.src('./src/index.html')
    .pipe(inject(gulp.src(
      './dist/bower.css', {read: false}),
      {name: 'bower', ignorePath: 'dist', addRootSlash: false}
    ))
    .pipe(inject(gulp.src(
      './dist/styles.css', {read: false}),
      {ignorePath: 'dist', addRootSlash: false}
    ))
    .pipe(inject(gulp.src(
      './dist/vendor.js', {read: false}),
      {name: 'bower', ignorePath: 'dist', addRootSlash: false}
    ))
    .pipe(inject(gulp.src(
      './dist/scripts.js', {read: false}),
      {ignorePath: 'dist', addRootSlash: false}
    ))
    .pipe(gulp.dest('./dist/'))
});



gulp.task('default', ['connect', 'index', 'watch']);
gulp.task('build', ['ngAnnotate', 'styles', 'vendor', 'vendorStyles', 'scripts', 'mergeCompiled']);
