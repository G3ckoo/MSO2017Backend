var Response = require('../model/Response.js');

module.exports = function(app, Schemas) {
    var AttachmentCtrl = require('../controller/AttachmentCtrl.js')(Schemas);
    
    app.get("/Attachment/:attachmentID", function(req, res) {
        AttachmentCtrl.findById(req, function(err, attachment) {
            if (err) {
                res.status(500).send(Response.create(err, null));
            } else {
                res.status(200).send(Response.create(null, attachment));
            }
        });
    });
    
    // Lädt die Attachments eines AppStimmers
    app.get("/Attachments/:appStimmerID", function(req, res) {
        AttachmentCtrl.list(req, function(err, attachment) {
            if (err) {
                res.status(500).send(Response.create(err, null));
            } else {
                res.status(200).send(Response.create(null, attachment));
            }
        });
    });
    
    app.get("/Attachments", function(req, res) {
        AttachmentCtrl.listAttachments(req, function(err, attachment) {
            if (err) {
                res.status(500).send(Response.create(err, null));
            } else {
                res.status(200).send(Response.create(null, attachment));
            }
        });
    });
    
    // Fügt einem AppStimmer ein Attachment hinzu und gibt das Attachment zurück.
    app.post("/attachment/:appStimmerID", function(req, res) {
        if (req.body.isMainAttachment && req.body.attachmentType && req.body.source) {
            AttachmentCtrl.insert(req, function(err, attachment) {
                if (err) {
                    res.status(500).send(Response.create(err, null));
                } else {
                    res.status(200).send(Response.create(null, attachment));
                }
            });
        }
        else {
            res.status(400).send(Response.create('Es wurden nicht alle benötigten Parameter angegeben: isMainAttachment, attachmentType, source', null));
        }
    });
    
    app.delete('/Attachment/:attachmentID', function(req, res) {
        AttachmentCtrl.delete(req, function(err, attachment) {
            
            if (err) {
                res.status(500).send(Response.create(err, null));
            } else {
                res.status(200).send(Response.create(null, attachment));
            }
        });
    });
}