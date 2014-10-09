/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var app = new EmberApp( {
    fingerprint: {
       exclude: ['images']
   }
});

app.import('bower_components/font-awesome/css/font-awesome.min.css');

var fontTree = pickFiles('bower_components/font-awesome/fonts', {
    srcDir: '/',
    files: ['*'],
    destDir: '/fonts'
});

app.import('bower_components/moment/moment.js');
app.import('bower_components/jquery/dist/jquery.js');
app.import('vendor/cldr.js');
app.import('vendor/ember-i18n.js');
app.import('vendor/ember-validation.js');

var index = app.legacyFilesToAppend.indexOf('bower_components/handlebars/handlebars.runtime.js');
if(index) {
    app.legacyFilesToAppend[index] = 'bower_components/handlebars/handlebars.js';
}

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = mergeTrees([
    app.toTree(),
    fontTree
]);
