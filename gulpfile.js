var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');

gulp.task('sass', function () {
  return gulp.src('app/scss/**/*.scss') // Get source files with gulp.src
    .pipe(sass()) // Sends it through a gulp plugin (gulp-sass)
    .pipe(gulp.dest('app/css')) // Outputs the file in the destination folder
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('app/scss/**/*.scss', ['sass']); //watch scss files and run gulp 'sass' command they are saved
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('useref', function() {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
})
