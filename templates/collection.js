/*global <%= _.camelize(appname) %>, Backbone*/

<%= _.camelize(appname) %>.Collections = <%= _.camelize(appname) %>.Collections || {};

(function () {
    'use strict';

    <%= _.camelize(appname) %>.Collections.<%= _.classify(name) %> = Backbone.Collection.extend({
        url: '/api/<%= _.slugify(appname) %>/<%= _.slugify(name) %>/',

        model: <%= _.camelize(appname) %>.Models.<%= _.classify(name) %>

    });

})();
