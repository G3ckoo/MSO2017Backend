var AppStimmer = require('../model/AppStimmer.js');
var AppStimmerCtrl = require('../controller/AppStimmerCtrl.js');

module.exports = function(app) {
    //Lädt einen bestimmten AppStimmer
    app.get("/AppStimmer/:id", function(req, res) {
        var id = req.params.id;
        
        res.status(501).send();
    });
    
    //Lädt alle AppStimmr
    app.get("/AppStimmer", function(req, res) {
        var skip = req.query.skip;
        var take = req.query.take;
        
        var appstimmerList = AppStimmerCtrl.list(skip, take);
        
        res.status(200).json(appstimmerList);
    });
    
    //Stimmt für einen bestimmten AppStimmer
    app.put("/AppStimmer/:id/Upvote", function(req, res) {
        var id = req.params.id;
        
        res.send(501); 
    });
    
    //Stimmt gegen einen bestimmten AppStimmer
    app.put("/AppStimmer/:id/Downvote", function(req, res) {
        var id = req.params.id;
        
        res.status(501).send(); 
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
        
        if (id != undefined) {
            status = 200;    
        } else {
            status = 500;
            error = 'Etwas ist beim Speichern schief gelaufen.';
        }
        
        res.status(status).send({id:id, errorMessage:error});
    });
    
    app.delete("AppStimmer/:id", function(req, res) {
        var id = req.params.id;
        
        res.status(501).send();
    });
}