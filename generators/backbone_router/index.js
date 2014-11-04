/*jshint latedef:false */
var path = require('path');
var BackboneTranslateBase = require('../../backbone-translate-base');

var RouterGenerator = BackboneTranslateBase.extend({
    constructor: function() {
        this.directory = 'routes';
        this.template_name = 'router';
        BackboneTranslateBase.apply(this, arguments);
    },

    writing: BackboneTranslateBase.prototype.writing
});

module.exports = RouterGenerator;
