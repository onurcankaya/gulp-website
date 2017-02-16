var gulp = require('gulp');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var minify = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

// file paths
var DIST_PATH = 'public/dist';
var SCRIPTS_PATH = 'public/scripts/**/*.js';
var STYLES_PATH = 'public/styles/**/*.css';

// styles
gulp.task('styles', function() {
  console.log('starting styles task');
  return gulp.src(['public/styles/reset.css', STYLES_PATH])
    .pipe(plumber(function(err) {
      console.log('styles task error');
      console.log(err);
      this.emit('end'); // internal gulp method that tells gulp to stop running the rest of the process but still keeps the gulp up
    }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(concat('styles.css'))
    .pipe(minify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
});

// scripts
gulp.task('scripts', function() {
  console.log('starting scripts task');

  return gulp.src(SCRIPTS_PATH)
    .pipe(uglify())
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
});

// images
gulp.task('images', function() {
  console.log('starting images task');
});

gulp.task('default', function() {
  console.log('starting default task');
});

gulp.task('watch', function() {
  console.log('starting watch task');
  require('./server.js');
  livereload.listen();
  gulp.watch(SCRIPTS_PATH, ['scripts']);
  gulp.watch(STYLES_PATH, ['styles']);
});
