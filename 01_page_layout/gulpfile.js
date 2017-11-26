const gulp = require('gulp')
const less = require('gulp-less')
const path = require('path')

gulp.task('less', () => {
  const le = less({
    paths: [path.join(__dirname, 'less', 'includes')]
  }).on('error', (e) => {
    console.log(e.message)
    le.end()
  })

  return gulp.src('./src/less/main.less')
    .pipe(le)
    .pipe(gulp.dest('./public/css'))

})

gulp.task('watch', () => {
  gulp.watch('./src/less/**/*.less', ['less'])
})
