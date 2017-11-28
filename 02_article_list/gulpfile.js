const path = require('path')
const gulp = require('gulp')
const babel = require('babelify')
const browserify = require('browserify')
const buffer = require('vinyl-buffer')
const source = require('vinyl-source-stream')
const less = require('gulp-less')

const LessPluginAutoPrefix = require('less-plugin-autoprefix')
const autoPrefixPlugin = new LessPluginAutoPrefix({browsers: ['last 2 versions']})

function handleError (err) {
  console.log(err.message)
  this.emit('end')
}

gulp.task('default', ['js', 'less'])

gulp.task('js', () => {
  const bro = browserify({
    entries: './src/js/app.js',
    debug: true
  }).transform(
    babel.configure({
      presets: ['env']
    })
  )

  bro.bundle()
    .on('error', handleError)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./public/js/'))
})

gulp.task('less', () => {
  const l = less({
    paths: [path.join(__dirname, 'less', 'includes')],
    plugins: [autoPrefixPlugin]
  }).on('error', (e) => {
    console.log(e.message)
    l.end()
  })

  gulp.src('./src/less/main.less')
    .pipe(l)
    .pipe(gulp.dest('./public/css'))
})

gulp.task('watch', () => {
  gulp.watch('./src/js/**/*.js', ['js'])
  gulp.watch('./src/less/**/*.less', ['less'])
})
