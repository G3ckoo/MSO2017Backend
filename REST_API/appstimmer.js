module.exports = function(app) {
    //Lädt einen bestimmten AppStimmer
    app.get("/AppStimmer/:id", function(req, res) {
        var skip = req.query.skip || 0;
        var take = req.query.take || 100;
        var id = req.params.id;
        
        res.send(501);
    });
    
    //Lädt alle AppStimmr
    app.get("/AppStimmer", function(req, res) {
        res.send(501);
    });
    
    //Stimmt für einen bestimmten AppStimmer
    app.put("/AppStimmer/:id/Upvote", function(req, res) {
        var id = req.params.id;
        
        res.send(501); 
    });
    
    //Stimmt gegen einen bestimmten AppStimmer
    app.put("/AppStimmer/:id/Downvote", function(req, res) {
        var id = req.params.id;
        
        res.send(501); 
    });
    
    app.delete("AppStimmer/:id", function(req, res) {
        var id = req.params.id;
        
        res.send(501);
    }));
}