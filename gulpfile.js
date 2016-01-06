var babel = require('gulp-babel');
var bowerFiles = require('main-bower-files');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var del = require('del');
var es = require('event-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var inject = require('gulp-inject');
var minifyCSS = require('gulp-minify-css');
var ngAnnotate = require('gulp-ng-annotate');
var plumber = require('gulp-plumber');
var templateCache = require('gulp-angular-templatecache');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task('connect', function() {
  connect.server({
    port: 8888,
    livereload: true,
    root: ['src/tmp', 'src']
  });
});

gulp.task('files', function () {
  return gulp
    .src('src/**')
    .pipe(connect.reload());
});

gulp.task('watch', ['coffee', 'babel'], function () {

  watch('src/**/*.coffee', function(){
    gulp.start('coffee');
  });

  watch(['src/**/*.js', '!src/tmp/**/*'], function(){
    gulp.start('babel');
  });

  return watch('src/**', function(){
    return gulp.start('files');
  });
});

gulp.task('coffee', function() {
  return gulp
    .src(['src/**/*.coffee', '!src/bower/**/*'])
    .pipe(plumber())
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./src/tmp'));
});

gulp.task('babel', function() {
  return gulp
    .src(['src/**/*.js', '!src/tmp/**/*', '!src/bower/**/*'])
    .pipe(plumber())
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest('./src/tmp'));
})

gulp.task('clearDist', function() {
  return del('./dist');
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
    .src([
      './src/**/*.html',
      '!./src/bower/**',
      '!./src/**/index.html',
      '!./src/webcomponents/**/*',
    ])
    .pipe(templateCache({
      module: 'acodemy-app'
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('scripts', ['mergeImports', 'coffee', 'babel'], function() {
  return gulp
    .src(['./src/tmp/**/*.js', '!./src/bower/**', './dist/templates.js'])
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
  return del('./dist/templates.js');
});


gulp.task('serve', ['connect', 'watch']);
gulp.task('default', ['serve']);
gulp.task('build', ['clearTemplatesJS']);
