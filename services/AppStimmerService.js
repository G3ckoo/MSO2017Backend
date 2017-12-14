var dbaccess = require('../db/dbaccess.js');
"use strict"
var self = module.exports = {

    findById: function(id) {
        return dbaccess.appstimmer.find({'id':id});
    },
    
    save: function(appstimmer) {
        // TODO: auto-increment and return id 
        dbaccess.appstimmer.insert(appstimmer);
        return appstimmer.id;
    },
    
    list: function(skip, take) {
        skip = skip || 0;
        take = take || 10000;
        return dbaccess.appstimmer.mapReduce(function(obj) { return obj; },
        function(array) {
            var range = [];
            for (var i = skip; i < array.length && i < take; i++) {
                range[i] = array[i];
            }
            return range;
        }.bind(this));
    },
    
    deleteById: function(id) {
        var deleted = false;
        var results = dbaccess.appstimmer.chain().find({id: 4}).data();
        if (results != undefined) {
            dbaccess.appstimmer.remove(results);
            deleted = true;
        }
        return deleted;
    },
    
    upvote: function(id) {
        var upvoted = false;
        var results = dbaccess.appstimmer.chain().find({'id':Number.parseInt(id)}).data();
        if (results != undefined) {
            var value = results[0].upvotes;
            value++;
            results[0].upvotes = value;
            dbaccess.appstimmer.update(results);
            upvoted = true;
        }
        return upvoted;
    },
    
    downvote: function(id) {
        var downvoted = false;
        var results = dbaccess.appstimmer.chain().find({'id':Number.parseInt(id)}).data();
        if (results != undefined) {
            var value = results[0].downvotes;
            value++;
            results[0].downvotes = value;
            dbaccess.appstimmer.update(results);
            downvoted = true;
        }
        return downvoted;
    }
};