var generators = require('yeoman-generator');
var _ = require('underscore');
_.str = require('underscore.string');
var path = require('path');
var fs = require('fs');
var BackboneTranslateBase = require('../../backbone-translate-base.js');

_.mixin(_.str.exports());
_.str.include('Underscore.string', 'string'); // => true

module.exports = BackboneTranslateBase.extend({
    // The name `constructor` is important here
    constructor: function() {
        BackboneTranslateBase.apply(this, arguments);
    },

    writing: {
        django: function() {

            // serializers
            this._addContentToFile(
                this.apps_path + this.appname + '/serializers.py',
                "#serializers",
                this.engine(fs.readFileSync(path.join(__dirname, 'templates/serializers.py'), "utf-8"), {
                    apps_path: this.apps_path,
                    name: this.appname,
                    model: this.model
                })
            );

            this._addContentToFile(
                this.apps_path + this.appname + '/serializers.py',
                "#imports",
                this.engine(fs.readFileSync(path.join(__dirname, 'templates/imports_serializers.py'), "utf-8"), {
                    apps_path: this.apps_path,
                    name: this.appname,
                    model: this.model
                })
            );

            // api views
            this._addContentToFile(
                this.apps_path + this.appname + '/api_views.py',
                "#api_views",
                this.engine(fs.readFileSync(path.join(__dirname, 'templates/api_views.py'), "utf-8"), {
                    apps_path: this.apps_path,
                    name: this.appname,
                    model: this.model
                })
            );

            this._addContentToFile(
                this.apps_path + this.appname + '/api_views.py',
                "#imports",
                this.engine(fs.readFileSync(path.join(__dirname, 'templates/imports_api_views.py'), "utf-8"), {
                    apps_path: this.apps_path,
                    name: this.appname,
                    model: this.model
                })
            );

            // api urls
            this._addContentToFile(
                this.apps_path + 'api/urls.py',
                "#urls",
                this.engine(fs.readFileSync(path.join(__dirname, 'templates/urls.py'), "utf-8"), {
                    apps_path: this.apps_path,
                    name: this.appname,
                    model: this.model
                })
            );

            this._addContentToFile(
                this.apps_path + 'api/urls.py',
                "#imports",
                this.engine(fs.readFileSync(path.join(__dirname, 'templates/imports_urls.py'), "utf-8"), {
                    apps_path: this.apps_path,
                    name: this.appname,
                    model: this.model
                })
            );
        }
    }

});
