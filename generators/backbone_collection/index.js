/*jshint latedef:false */
var path = require('path');
var BackboneTranslateBase = require('../../backbone-translate-base');

var CollectionGenerator = BackboneTranslateBase.extend({
    constructor: function() {
        this.directory = 'collections';
        this.template_name = 'collection';
        BackboneTranslateBase.apply(this, arguments);
    },

    writing: BackboneTranslateBase.prototype.writing
});

module.exports = CollectionGenerator;
