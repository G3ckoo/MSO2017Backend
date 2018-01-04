var mongoose = require('mongoose');

module.exports = function(Schemas) {
    var AppStimmer = Schemas.AppStimmer;
    var Attachment = Schemas.Attachment;
    
    return {
        findById: function(id, callback) {
            AppStimmer.findById(id, callback);
        },

        insert: function(appStimmerModel, callback) {
            var appStimmer = new AppStimmer(appStimmerModel);
            appStimmer.save(callback);
        },

        list: function(options, callback) {
            var skip = options.skip || 0;
            var take = options.take || 10000;

            AppStimmer.find({}, callback);
        },

        delete: function(id, callback) {
            AppStimmer.findByIdAndRemove(id, function(err, appStimmer) {
                if (err) callback(err, null);
                
                Attachment.deleteMany({"appStimmer":mongoose.Types.ObjectId(id)}, callback);
            });
        },

        upvote: function(id, callback) {
            AppStimmer.findById(id, function(err, appStimmer) {
                if (err) callback(err, null);

                var upvotes = appStimmer.upvotes;
                upvotes++;
                appStimmer.upvotes = upvotes;
                appStimmer.save(callback);
            });
        },

        downvote: function(id, callback) {
            AppStimmer.findById(id, function(err, appStimmer) {
                if (err) callback(err, null);

                var downvotes = appStimmer.downvotes;
                downvotes++;
                appStimmer.downvotes = downvotes;
                appStimmer.save(callback);
            });
        }
    };
}