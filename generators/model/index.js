var generators = require('yeoman-generator');
var path = require('path');
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

    write: function(){
        all: {
            this.composeWith('django:django_model', {
                arguments: this.args
            });

            this.composeWith('django:backbone_model', {
                arguments: this.args
            });
        }
    }

});
