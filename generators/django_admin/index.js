var generators = require('yeoman-generator');
var path = require('path');
var fs = require('fs');
var BackboneTranslateBase = require('../../backbone-translate-base.js');

module.exports = BackboneTranslateBase.extend({
    // The name `constructor` is important here
    constructor: function() {
        BackboneTranslateBase.apply(this, arguments);
    },

    writing: {
        django: function() {
            this._addContentToFile(
                this.apps_path + this.appname + '/admin.py',
                "#admins",
                this.engine(fs.readFileSync(path.join(__dirname, 'templates/admin.py'), "utf-8"), {
                    apps_path: this.apps_path,
                    name: this.appname,
                    model: this.model
                })
            );

            this._addContentToFile(
                this.apps_path + this.appname + '/admin.py',
                "#imports",
                this.engine(fs.readFileSync(path.join(__dirname, 'templates/imports_admin.py'), "utf-8"), {
                    apps_path: this.apps_path,
                    name: this.appname,
                    model: this.model
                })
            );

            this._addContentToFile(
                this.apps_path + this.appname + '/admin.py',
                "#registers",
                this.engine(fs.readFileSync(path.join(__dirname, 'templates/registers_admin.py'), "utf-8"), {
                    apps_path: this.apps_path,
                    name: this.appname,
                    model: this.model
                })
            );
        }
    }

});
