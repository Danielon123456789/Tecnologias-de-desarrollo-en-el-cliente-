const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


gulp.task('styles', ()=>{
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/styles'))
})


gulp.task('js', () => {
  return gulp.src('src/js/**/*.js').pipe(gulp.dest('dist/js'));
});


gulp.task('html', () => {
  return gulp.src('src/views/**/*.html')
    .pipe(gulp.dest('dist/views'));
});

gulp.task('json', () => {
  return gulp.src('src/data/**/*', {encoding: false})
    .pipe(gulp.dest('dist/data'));
});



gulp.task('build', gulp.series('styles', 'js', 'html', 'json')); 
