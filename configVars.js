/**
 * Configuration values
 */
module.exports = {
  global: {
    gulpPath: 'gulp/',
    outputPath: 'build/',
    cleanWhitelist: ['index.html']
  },
  js: {
    fileGlob: '**/*.js',
    testFileGlob: '**/*.spec.js',
    srcPath: 'src/',
    entryFile: 'ExtDate.js',
    libraryName: 'ExtDate',
    outputPath: '',
    outputFile: 'ExtDate.js',
    outputMinFile: 'ExtDate.min.js'
  },
  unitTests: {
    karmaConfigFile: 'karma.conf.js',
    entryFile: 'tests/unit-tests.js',
    coverageOutputPath: 'tests/'
  }
}
