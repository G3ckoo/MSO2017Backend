var AppStimmer = require('../model/AppStimmer.js');

module.exports = {
    get: function(id) {
        return new AppStimmer(
            id, 
            "AppStimmer #0", // Titel
            "Das ist ein statisch generierter AppStimmer.", // Abstract
            "", // Beschreibung
            "" // Bild(-Pfad)
        );
    }
}