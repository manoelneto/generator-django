/*jshint latedef:false */
var path = require('path');
var BackboneTranslateBase = require('../../backbone-translate-base');

var ViewGenerator = BackboneTranslateBase.extend({
    constructor: function() {
        this.directory = 'views';
        this.template_name = 'view';
        BackboneTranslateBase.apply(this, arguments);
        this.sourceRoot(path.join(__dirname, '../../templates'));
    },

    writing: {
        routerFiles: function() {
        },

        createViewFiles: function() {
            var templateFramework = this.config.get('templateFramework') || 'lodash';
            var templateExt = '.tpl';
            this.jst_path = path.join(this.apps_path, 'core/_static/js/apps/', this.appname, 'templates', this.name + templateExt);

            this.template('view.ejs', this.jst_path);
            if (templateFramework === 'mustache') {
                this.jst_path = this.name + '-template';
            }

            this._writeTemplate(this.template_name, path.join(this.apps_path, 'core/_static/js/apps/', this.appname, this.directory, this.name));

            this._addContentToFile(
                this.apps_path + 'core/_static/node/Gruntfile.js',
                "//generated_scripts",

                // por enquanto não tem suporte ao coffe
                '"<%= dirs.js %>/apps/' + path.join(this.appname, this.directory, this.name + '.js",')
            );
        }
    }
});

module.exports = ViewGenerator;
