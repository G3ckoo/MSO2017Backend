var Response = require('../model/Response.js');

module.exports = function(app, Schemas) {
    var AppStimmerCtrl = require('../controller/AppStimmerCtrl.js')(Schemas);
    var defaultCallback = function(res, err, result) {
        if (err) {
            res.status(500).send(Response.create(err, null));
        } else {
            res.status(200).send(Response.create(null, result));
        }
    };
    
    //Lädt einen bestimmten AppStimmer
    app.get("/AppStimmer/:id", function(req, res) {
        AppStimmerCtrl.findById(req, function(err, result) {
            defaultCallback(res, err, result);
        });
    });
    
    //Lädt alle AppStimmr
    app.get("/AppStimmer", function(req, res) {
        AppStimmerCtrl.list(req, function(err, result) {
            defaultCallback(res, err, result);
        });
    });
    
    //Stimmt für einen bestimmten AppStimmer
    app.put("/AppStimmer/:id/Upvote", function(req, res) {
        AppStimmerCtrl.upvote(req, function(err, result) {
            defaultCallback(res, err, result);
        });
    });
    
    //Stimmt gegen einen bestimmten AppStimmer
    app.put("/AppStimmer/:id/Downvote", function(req, res) {
        AppStimmerCtrl.downvote(req, function(err, result) {
            defaultCallback(res, err, result);
        });
    });
    
    app.post("/AppStimmer", function(req, res) {
        AppStimmerCtrl.insert(req, function(err, appStimmer) {
            defaultCallback(res, err, appStimmer);
        });
    });
    
    app.delete("/AppStimmer/:id", function(req, res) {
        AppStimmerCtrl.delete(req, function(err) {
            if (err) {
                res.status(500).send(Response.create(err, {}));
            }
            else {
                res.status(200).send(Response.create(null, "AppStimmer mit der id " + req.params.id + " wurde erfolreich gelöscht."));
            }
        });
    });
}