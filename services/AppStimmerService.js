var dbaccess = require('../db/dbaccess.js');
"use strict"
var self = module.exports = {

    findById: function(id) {
        return dbaccess.appstimmer.find({'id':id});
    },
    
    save: function(appstimmer) {
        dbaccess.appstimmer.insert(appstimmer);
    },
    
    list: function(skip, take) {
        skip = skip || 0;
        take = take || 10000;
        return dbaccess.appstimmer.mapReduce(function(obj) { return obj; },
        function(array) {
            var range = [];
            for (var i = skip; i < array.length && i < take; i++) {
                range[i] = this.mapAppstimmer(array[i]);
            }
            return range;
        }.bind(this));
    },

    mapAppstimmer: function (appstimmer) {
        return {"id":appstimmer.id, "title": appstimmer.title };
    }
};