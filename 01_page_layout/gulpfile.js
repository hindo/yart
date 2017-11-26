const gulp = require('gulp')
const less = require('gulp-less')
const path = require('path')
const LessPluginAutoPrefix = require('less-plugin-autoprefix')
const autoprefixPlugin = new LessPluginAutoPrefix({browsers: ["last 2 versions"]})

gulp.task('less', () => {
  const le = less({
    paths: [path.join(__dirname, 'less', 'includes')],
    plugins: [autoprefixPlugin]
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
