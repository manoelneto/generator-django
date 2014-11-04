/*jshint latedef:false */
var path = require('path');
var BackboneTranslateBase = require('../../backbone-translate-base');

var ModelGenerator = BackboneTranslateBase.extend({
    constructor: function() {
        this.directory = 'models';
        this.template_name = 'model';
        BackboneTranslateBase.apply(this, arguments);
    },

    writing: BackboneTranslateBase.prototype.writing
});

module.exports = ModelGenerator;
