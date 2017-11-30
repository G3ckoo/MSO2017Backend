var loki = require('lokijs');
var db = new loki('./database.json');
var appstimmer = db.addCollection('AppStimmer', {indices:['id']});

module.exports = {
    db: db,
    appstimmer: appstimmer
}