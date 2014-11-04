var BackboneScriptBase = require('./node_modules/generator-backbone/script-base.js');
var utils = require('./utils.js');
var path = require('path');

module.exports = BackboneScriptBase.extend({
    // copy code for sourceroot to be this template
    _setupSourceRootAndSuffix: function() {
        var sourceRoot = '/templates';
        this.scriptSuffix = '.js';

        if (this.env.options.coffee || this.options.coffee) {
            sourceRoot = '/templates/coffeescript';
            this.scriptSuffix = '.coffee';
        }

        if (this.env.options.requirejs || this.options.requirejs) {
            sourceRoot += '/requirejs';
        }

        this.sourceRoot(path.join(__dirname, sourceRoot));
    },

    _addContentToFile: function(file, needle, content) {
        utils.rewriteFile({
            file: file,
            needle: needle,
            splicable: [
                content
            ]
        });

        try {} catch (e) {
            this.log('\n Unable to find ' + file);
        }
    },
});
