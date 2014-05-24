var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var shell = require('gulp-shell');

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

// deploy by pushing the dist subtree to gh-pages
gulp.task('deploy', ['scripts', 'styles'], shell.task([
  'git subtree push --prefix dist origin gh-pages'
]));

// The default task builds locally
gulp.task('default', ['scripts', 'styles']);

