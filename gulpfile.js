var gulp = require('gulp');
var uglify = require('gulp-uglify');

// styles
gulp.task('styles', function() {
  console.log('starting styles task');
});

// scripts
gulp.task('scripts', function() {
  console.log('starting scripts task');

  return gulp.src('public/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/dist'));
});

// images
gulp.task('images', function() {
  console.log('starting images task');
});

gulp.task('default', function() {
  console.log('starting default task');
});
