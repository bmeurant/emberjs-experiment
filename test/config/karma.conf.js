module.exports = function(config){
    config.set({
        basePath : '../',

        files : [
            QUNIT,
            QUNIT_ADAPTER,
            'dist/**/*.js',
            'test/unit/**/*.js'
        ],

        exclude: [],

        autoWatch : false,

        reporters: ['progress'],

        browsers : ['Chrome'],

        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-script-launcher'
        ]
    });
};