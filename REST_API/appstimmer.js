var AppStimmer = require('../model/AppStimmer.js');
var Response = require('../model/Response.js');
var AppStimmerCtrl = require('../controller/AppStimmerCtrl.js');

module.exports = function(app) {
    //Lädt einen bestimmten AppStimmer
    app.get("/AppStimmer/:id", function(req, res) {
        var status = 501, error = '';
        var appStimmer = AppStimmerCtrl.findById(req.params.id);
        
        if (appStimmer == undefined) {
            status = 500;
            error = "AppStimmer mit der id " + req.params.id + " konnte nicht gefunden werden.";
        } else {
            status = 200;
        }
        res.status(status).send(Response.create(error, appStimmer));
    });
    
    //Lädt alle AppStimmr
    app.get("/AppStimmer", function(req, res) {
        var skip = req.query.skip;
        var take = req.query.take;
        var status = 501, error = '';
        
        var appstimmerList = AppStimmerCtrl.list(skip, take);
        if (appstimmerList == undefined) {
            status = 500;
            error = "AppStimmer konnten nicht geladen werden.";
        } else {
            status = 200;
        }
        
        res.status(status).send(Response.create(error, appstimmerList));
    });
    
    //Stimmt für einen bestimmten AppStimmer
    app.put("/AppStimmer/:id/Upvote", function(req, res) {
        var status = 501, error = '';
        var success = AppStimmerCtrl.upvote(req.params.id);
        if (success) {
            status = 200;
        } else {
            status = 500;
            error = "AppStimmer mit der id " + req.params.id + " konnte nicht geupvoted werden.";
        }
        res.status(status).send(Response.create(error, "AppStimmer mit der id " + req.params.id + " wurde erfolgreich geupvoted.")); 
    });
    
    //Stimmt gegen einen bestimmten AppStimmer
    app.put("/AppStimmer/:id/Downvote", function(req, res) {
        var status = 501, error = '';
        var success = AppStimmerCtrl.downvote(req.params.id);
        if (success) {
            status = 200;
        } else {
            status = 500;
            error = "AppStimmer mit der id " + req.params.id + " konnte nicht gedownvoted werden.";
        }
        res.status(status).send(Response.create(error, "AppStimmer mit der id " + req.params.id + " wurde erfolgreich gedownvoted.")); 
    });
    
    app.post("/AppStimmer", function(req, res) {
        var error = '', status = 501;
        var appstimmer = AppStimmer.create(
            req.body.id,
            req.body.title,
            req.body.abstract,
            req.body.description,
            req.body.image,
            req.body.user,
            req.body.upvotes,
            req.body.downvotes
        );
        var id = AppStimmerCtrl.save(appstimmer);
        
        if (id == undefined) {
            status = 500;
            error = "AppStimmer konnte nicht gespeichert werden.";    
        } else {
            status = 200;
        }
        
        res.status(status).send({id:id, errorMessage:error});
    });
    
    app.delete("AppStimmer/:id", function(req, res) {
        var status = 501, error = '';
        var deleted = AppStimmerCtrl.deleteById(req.params.id);
        if (deleted) {
            status = 200;
        } else {
            status = 500;
            error = "AppStimmer mit der id " + req.params.id + " konnte nicht gelöscht werden.";
        }
        
        res.status(status).send(Response.create(error, "AppStimmer mit der id " + req.params.id + " wurde erfolreich gelöscht."));
    });
}