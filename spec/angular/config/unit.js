

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '../../..',

    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'spec/angular/tmp/unit-bundle.js',
      'app/assets/angular/**/*.tpl.html'
    ],

    preprocessors: {
      '**/*.tpl.html': 'ng-html2js'
    },

    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'app/assets/angular/',

      // setting this option will create only a single module that contains
      // templatesfrom all the files, so you can load them all with
      // module('html2js.templates')
      moduleName: 'html2js.templates'
    },

    // use dots reporter, as travis terminal does not support escaping sequences
    // possible values: 'dots' || 'progress'
    reporters: 'progress',

    // these are default values, just to show available options

    // web server port
    port: 8089,

    // cli runner port
    runnerPort: 9109,

    urlRoot: '/__test/',

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // polling interval in ms (ignored on OS that support inotify)
    autoWatchInterval: 0,

    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          // Without a remote debugging port, Google Chrome exits immediately.
          '--remote-debugging-port=9222'
        ]
      }
    },

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari
    // - PhantomJS
    browsers: ['Chrome'],

    // Continuous Integration modetyarnyarn
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    // report which specs are slower than 700ms
    // CLI --report-slower-than 700
    reportSlowerThan: 700,

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-junit-reporter',
      'karma-commonjs',
      'karma-ng-html2js-preprocessor'
    ]
  });
};
