var Response = require('../model/Response.js');

module.exports = function(app, Schemas) {
    var AttachmentCtrl = require('../controller/AttachmentCtrl.js')(Schemas);
    
    function defaultCallback(res, err, attachment) {
        if (err) {
            res.status(500).send(Response.create(err, null));
        } else {
            res.status(200).send(Response.create(null, attachment));
        }
    }
    
    app.get("/Attachment/:attachmentID", function(req, res) {
        AttachmentCtrl.findById(req, function(err, attachment) {
            defaultCallback(res, err, attachment);
        });
    });
    
    // Lädt die Attachments eines AppStimmers
    app.get("/AppStimmer/:appStimmerID/Attachments", function(req, res) {
        AttachmentCtrl.list(req, function(err, attachment) {
            defaultCallback(res, err, attachment);
        });
    });
    
    app.get("/Attachments", function(req, res) {
        AttachmentCtrl.listAttachments(req, function(err, attachment) {
            defaultCallback(res, err, attachment);
        });
    });
    
    // Fügt einem AppStimmer ein Attachment hinzu und gibt das Attachment zurück.
    app.post("/AppStimmer/:appStimmerID/Attachment", function(req, res) {
        AttachmentCtrl.insert(req, function(err, attachment) {
            defaultCallback(res, err, attachment);
        });
    });
    
    app.put("/Attachment/:attachmentID", function(req, res) {
        AttachmentCtrl.update(req, function(err, attachment) {
            defaultCallback(res, err, attachment);
        });
    });
    
    app.delete('/Attachment/:attachmentID', function(req, res) {
        AttachmentCtrl.delete(req, function(err) {
            if (err) {
                res.status(500).send(Response.create(err, {}));
            }
            else {
                res.status(200).send(Response.create(null, "Attachment mit der id " + req.params.attachmentID + " wurde erfolreich gelöscht."));
            }
        });
    });
}