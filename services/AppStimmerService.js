var dbaccess = require('../db/dbaccess.js');

module.exports = {
    findById: function(id) {
        return dbaccess.appstimmer.find({'id':id});
    },
    
    save: function(appstimmer) {
        dbaccess.appstimmer.insert(appstimmer);
    },
    
    list: function(skip, take) {
        skip = skip || 0;
        take = take || 10000;
        dbaccess.appstimmer.mapReduce(function(obj) { return obj; },
        function(array) {
            var range = [];
            for (var i = skip; i < array.length && i < take; i++) {
                range += array[i];
            }
            return range;
        })
    }
};