var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');



gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  return gulp.src(["*.js", "!gulpfile.js"])
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  return gulp.src('*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('dist'));
});


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'styles']);