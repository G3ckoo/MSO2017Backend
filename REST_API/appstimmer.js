var AppStimmer = require('../model/AppStimmer.js');
var AppStimmerCtrl = require('../controller/AppStimmerCtrl.js');

module.exports = function(app) {
    //Lädt einen bestimmten AppStimmer
    app.get("/AppStimmer/:id", function(req, res) {
        var id = req.params.id;
        
        res.send(501);
    });
    
    //Lädt alle AppStimmr
    app.get("/AppStimmer", function(req, res) {
        var skip = req.query.skip;
        var take = req.query.take;
        
        var appstimmerList = AppStimmerCtrl.list(skip, take);
        
        res.status = 200;
        res.send(appstimmerList);
    });
    
    //Stimmt für einen bestimmten AppStimmer
    app.put("/AppStimmer/:id/Upvote", function(req, res) {
        var id = req.params.id;
        
        res.send(501); 
    });
    
    app.post("/AppStimmer", function(req, res) {
        var id = req.body.id;
        var title = req.body.title;
        var abstract = req.body.abstract;
        var description = req.body.description;
        var imagePath = req.body.image;
        var user = req.body.user;
        //var appStimmer = Object.create(AppStimmer);
        AppStimmerCtrl.save({
            id: id, 
            title: title, 
            abstract: abstract,
            description: description,
            image: imagePath,
            user: user
        });
        
        res.send(200);
    });
    
    //Stimmt gegen einen bestimmten AppStimmer
    app.put("/AppStimmer/:id/Downvote", function(req, res) {
        var id = req.params.id;
        
        res.send(501); 
    });
    
    app.delete("AppStimmer/:id", function(req, res) {
        var id = req.params.id;
        
        res.send(501);
    });
}