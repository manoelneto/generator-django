var generators = require('yeoman-generator');
var path = require('path');
var _ = require('underscore');
var fs = require('fs');
var ScriptBase = require('../../script-base.js');

module.exports = ScriptBase.extend({
    // The name `constructor` is important here
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

        this.args = [this.name, this.model, this.apps_path];

    },

    write: function() {
        var self = this;
        _.each(['django_model', 'backbone_model', 'backbone_view', 'backbone_router', 'backbone_collection', 'django_rest', 'django_admin'], function(subModule) {
            self.composeWith('django:' + subModule, {
                arguments: self.args
            });
        });
    }

});
