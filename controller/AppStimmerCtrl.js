var AppStimmerService = require('../services/AppStimmerService.js');

module.exports = {
    findById: function(id) {
        return AppStimmerService.findById(id);
    },
    
    deleteById: function(id) {
        return AppStimmerService.deleteById(id);
    },
    
    upvote: function(id) {
        return AppStimmerService.upvote(id);
    },
    
    downvote: function(id) {
        return AppStimmerService.downvote(id);
    },
    
    list: function(skip, take) {
        return AppStimmerService.list(skip, take);
    },
    
    save: function(appStimmer) {
        return AppStimmerService.save(appStimmer);
    }
}