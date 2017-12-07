var AppStimmerService = require('../services/AppStimmerService.js');

module.exports = {
    findById: function(id) {
        return AppStimmerService.findById(id);
    },
    
    list: function(skip, take) {
        return AppStimmerService.list(skip, take);
    },
    
    save: function(appStimmer) {
        AppStimmerService.save(appStimmer);
    }
}