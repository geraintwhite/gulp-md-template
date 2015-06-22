var gulp = require('gulp'),
    template = require('../');

gulp.task('default', function () {
    return gulp.src('./*.html')
      .pipe(template('./partials'))
      .pipe(gulp.dest('./dist'));
});