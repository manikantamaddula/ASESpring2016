// Karma configuration
// Generated on Wed Mar 16 2016 18:21:31 GMT-0500 (Central Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine','broweserify'],


    // list of files / patterns to load in the browser
    files: [
      '../*.js',
      '../**.*.js',
      'angular-mocks.js',
      '**/*.tests.js',
      'node_modules/angular/angular.js',
      'js/*.js',
      '*.js',
      '../angular-mocks.js',
      'node_modules\angular-mocks\angular-mocks.js',
      '..\node_modules\angular-mocks\angular-mocks.js',
      '..\www\lib\ionic\js\ionic.bundle.js',
      '..\www\lib\moment.min.js',
      '..\www\app\**\*.js',
      '..\bower_components\angular-mocks\angular-mocks.js',
      '..\www\lib\ionic\js\ionic-angular.min.js',
      '..\www\js\*.js'
        
    ],


    // list of files to exclude
    exclude: [
    ],
      plugins: [
  'karma-browserify','karma-jasmine'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {'src/test/js/*.spec.js': ['browserify']
    },
      
    browserify: {
        debug: true
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
