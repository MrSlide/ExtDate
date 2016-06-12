var gulp = require('gulp')
var babel = require('gulp-babel')
var sourcemaps = require('gulp-sourcemaps')
var configVars = require('../configVars.js')

/**
 * Transpile and minify source JavaScript code using Webpack and Babel
 */
gulp.task('compileJs', function () {
  return gulp.src('./' + configVars['js']['srcPath'] + configVars['js']['entryFile'])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015-loose'],
      plugins: [
        'transform-object-assign',
        'transform-es2015-modules-umd'
      ],
      comments: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./' + configVars['global']['outputPath'] + configVars['js']['outputPath']))
})
