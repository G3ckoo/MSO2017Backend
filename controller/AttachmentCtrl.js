var AttachmentModel = require('../model/Attachment.js');
var AttachmentTypes = require('../model/AttachmentTypes.js');

module.exports = function(Schemas) {
    var AttachmentService = require('../services/AttachmentService.js')(Schemas);
    
    function createAttachmentModel(req, callback) {
        Schemas.AppStimmer.findById(req.params.appStimmerID, function(err, appStimmer) {
            if (err) callback(err, null);
            
            var attachmentModel = AttachmentModel.create(
                appStimmer,
                req.body.isMainAttachment,
                req.body.attachmentType,
                req.body.source,
                req.body.description
            );
            callback(null, attachmentModel);
        });
    }
    
    return {
        insert: function(req, callback) {
            if (req.params.appStimmerID && req.body.isMainAttachment && req.body.attachmentType && req.body.source) {
                createAttachmentModel(req, function(err, attachmentModel) {
                    AttachmentService.insert(attachmentModel, callback);
                });
            }
            else {
                var error = "Es wurden nicht alle benötigten Parameter übergeben: isMainAttachment, attachmentType, source";
                callback(error, null);
            }
        },

        findById: function(req, callback) {
            var attachmentID = req.params.attachmentID;
            AttachmentService.findById(attachmentID, callback);
        },
        
        delete: function(req, callback) {
            var attachmentID = req.params.attachmentID;
            AttachmentService.delete(attachmentID, callback);
        },

        list: function(req, callback) {
            var appStimmerID = req.params.appStimmerID;
            AttachmentService.list(appStimmerID, callback);
        },
        
        listAttachments: function(req, callback) {
            AttachmentService.listAttachments(callback);
        },

        update: function(req, callback) {
            createAttachmentModel(req, function(err, attachmentModel) {
                AttachmentService.update(attachmentModel, callback);
            });
        }
    };
}