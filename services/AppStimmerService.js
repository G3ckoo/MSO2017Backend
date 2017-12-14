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
        var results = dbaccess.appstimmer.chain().remove({id: id});
        if (true) {
            //results.remove();
            deleted = true;
        }
        return deleted;
    },
    
    upvote: function(id) {
        var upvoted = false;
        var result = dbaccess.appstimmer.chain().find({id: id});
        if (result != undefined) {
            var value = result.upvotes;
            value++;
            result.update({upvotes: value});
            upvoted = true;
        }
        return upvoted;
    },
    
    downvote: function(id) {
        var downvoted = false;
        var result = dbaccess.appstimmer.chain().find({id: id}).update({downvotes:5});
//        if (result != undefined) {
//            var value = result.downvotes;
//            value++;
//            result.update({"downvotes": value});
//            downvoted = true;
//        }
        return downvoted;
    }
};