var AppStimmerCtrl = require('../controller/AppStimmerCtrl.js');
var AppStimmer = require('../model/AppStimmer.js');

module.exports = function() {
    console.info("Initialisiere Datenbank...");
    console.info("Beispieldaten werden geladen...");
    
    var AppStimmer1 = AppStimmer.create(
        0,
        "AppStimmer #1",
        "Das ist der Abstract.",
        "Das ist die ausführliche Beschreibung.",
        "./images/bild.jpg",
        0, // UserID,
        0, // upvotes
        0  // downvotes
    );
    var AppStimmer2 = AppStimmer.create(
        1,
        "AppStimmer #2",
        "Das ist der Abstract.",
        "Das ist die ausführliche Beschreibung.",
        "./images/bild.jpg",
        0, // UserID,
        0, // upvotes
        0  // downvotes
    );
    var AppStimmer3 = AppStimmer.create(
        2,
        "AppStimmer #3",
        "Das ist der Abstract.",
        "Das ist die ausführliche Beschreibung.",
        "./images/bild.jpg",
        0, // UserID,
        0, // upvotes
        0  // downvotes
    );
    var AppStimmer4 = AppStimmer.create(
        3,
        "AppStimmer #4",
        "Das ist der Abstract.",
        "Das ist die ausführliche Beschreibung.",
        "./images/bild.jpg",
        0, // UserID,
        0, // upvotes
        0  // downvotes
    );
    var AppStimmer5 = AppStimmer.create(
        4,
        "AppStimmer #5",
        "Das ist der Abstract.",
        "Das ist die ausführliche Beschreibung.",
        "./images/bild.jpg",
        0, // UserID,
        0, // upvotes
        0  // downvotes
    );
    
    AppStimmerCtrl.save(AppStimmer1);
    AppStimmerCtrl.save(AppStimmer2);
    AppStimmerCtrl.save(AppStimmer3);
    AppStimmerCtrl.save(AppStimmer4);
    AppStimmerCtrl.save(AppStimmer5);
    
    console.info("Datenbank wurde erfolgreich initialisiert!");
}