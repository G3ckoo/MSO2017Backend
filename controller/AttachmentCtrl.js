var AttachmentModel = require('../model/Attachment.js');
var AttachmentTypes = require('../model/AttachmentTypes.js');

module.exports = function(Schemas) {
    var AttachmentService = require('../services/AttachmentService.js')(Schemas);
    
    function getAttachmentModel(req) {
        return AttachmentModel.create(
            req.body.isMainAttachment,
            req.body.attachmentType,
            req.body.source,
            req.body.description
        );
    }
    
    return {
        insert: function(req, callback) {
            if (req.body.isMainAttachment && req.body.attachmentType && req.body.source) {
                var appStimmerID = req.params.appStimmerID;
                var attachmentModel = getAttachmentModel(req);
                AttachmentService.insert(appStimmerID, attachmentModel, callback);
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
            var id = req.params.attachmentID;
            var attachmentModel = getAttachmentModel(req);
            AttachmentService.update(id, attachmentModel, callback);
        }/*,

        delete: function(req, callback) {
        }*/
    };
}