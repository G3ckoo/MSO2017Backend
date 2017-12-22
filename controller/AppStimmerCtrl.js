var AppStimmerModel = require('../model/AppStimmer.js');

module.exports = function(Schemas) {
    var AppStimmerService = require('../services/AppStimmerService.js')(Schemas);
    
    return {
        findById: function(req, callback) {
            AppStimmerService.findById(req.params.id, callback);
        },

        delete: function(req, callback) {
            AppStimmerService.delete(req.params.id, callback);
        },

        upvote: function(req, callback) {
            AppStimmerService.upvote(req.params.id, callback);
        },

        downvote: function(req, callback) {
            AppStimmerService.downvote(req.params.id, callback);
        },

        list: function(req, callback) {
            var options = {
                skip: req.body.skip,
                take: req.body.take
            };
            AppStimmerService.list(options, callback);
        },

        insert: function(req, callback) {
            var appStimmerModel = AppStimmerModel.create(req.body.title);
            AppStimmerService.insert(appStimmerModel, callback);
        }
    }
};