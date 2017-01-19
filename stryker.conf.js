module.exports = function(config){
  config.set({
    files: [
        // Add your files here, this is just an example:
        { pattern: 'engine/**/*.js', mutated: true, included: false},
        'test/**/*.js'
    ],
    testRunner: 'mocha',
    testFramework: 'mocha',
    coverageAnalysis: 'perTest',
    //reporter: ['clear-text', 'progress'],
    //reporter: ['progress'],
    reporter: ['clear-text'],
  });
}
