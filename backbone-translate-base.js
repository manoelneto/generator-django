/*jshint latedef:false */
var path = require('path');
var ScriptBase = require('./script-base.js');

var BackboneTranslateBase = ScriptBase.extend({
    constructor: function() {
        ScriptBase.apply(this, arguments);

        this.argument('model', {
            desc: 'The model Name',
            type: String,
            required: true
        });

        this.argument('apps_path', {
            desc: 'Path of django apps',
            type: String,
            defaults: 'apps/'
        });

        // generator-backbone uses model as name, but I have app as name
        // I have to change this args
        this.appname = this.name;
        this.name = this.model;
    },

    writing: {
        routerFiles: function() {
            this._writeTemplate(this.template_name, path.join(this.apps_path, 'core/_static/assets/js/apps/', this.appname, this.directory, this.name));

            this._addContentToFile(
                this.apps_path + 'core/_static/node/Gruntfile.js',
                "//generated_scripts",

                // por enquanto não tem suporte ao coffe
                '"<%= dirs.js %>/apps/' + path.join(this.appname, this.directory, this.name + '.js",')
            );
        }
    }
});

module.exports = BackboneTranslateBase;
