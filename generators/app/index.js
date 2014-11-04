var generators = require('yeoman-generator');
var _ = require('underscore');
_.str = require('underscore.string');
var ScriptBase = require('../../script-base.js');
_.mixin(_.str.exports());
_.str.include('Underscore.string', 'string'); // => true

module.exports = ScriptBase.extend({
    // The name `constructor` is important here
    constructor: function() {
        // Calling the super constructor is important so our generator is correctly setup
        ScriptBase.apply(this, arguments);

        this.argument('apps_path', {
            desc: 'Path of django apps',
            type: String,
            defaults: 'apps/'
        });

    },

    writing: {
        django: function() {
            this.copy('django/__init__.py', this.apps_path + this.name + '/__init__.py');
            this.copy('django/admin.py', this.apps_path + this.name + '/admin.py');
            this.copy('django/forms.py', this.apps_path + this.name + '/forms.py');
            this.copy('django/models.py', this.apps_path + this.name + '/models.py');
            this.template('django/urls.py', this.apps_path + this.name + '/urls.py');
            this.copy('django/views.py', this.apps_path + this.name + '/views.py');
            this.copy('django/serializers.py', this.apps_path + this.name + '/serializers.py');
            this.copy('django/api_views.py', this.apps_path + this.name + '/api_views.py');

            // settings
            this._addContentToFile(
                'project/settings.py',
                "#yeoman_apps",
                '"' + _.slugify(this.apps_path) + '.' + _.slugify(this.name) + '",'
            );
        }
    }

});
