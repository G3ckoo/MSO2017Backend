var AttachmentModel = require('../model/Attachment.js');
var AttachmentTypes = require('../model/AttachmentTypes.js');

module.exports = function(Schemas) {
    var AttachmentService = require('../services/AttachmentService.js')(Schemas);
    
    return {
        insert: function(req, callback) {
            var status = 501, error = "", result;
            if (req.body.isMainAttachment && req.body.attachmentType && req.body.source) {
                var appStimmerID = req.params.appStimmerID;
                var attachmentModel = AttachmentModel.create(
                    req.body.isMainAttachment,
                    req.body.attachmentType,
                    req.body.source,
                    req.body.description
                );
                AttachmentService.insert(appStimmerID, attachmentModel, callback);
            }
            else {
                var error = "Es wurden nicht alle benötigten Parameter übergeben: isMainAttachment, attachmentType, source";
                res.status(400).send(Response.create(error, null));
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
        
        delete: function(req, callback) {
            AttachmentService.delete(req.params.attachmentID, callback);
        } /*,

        update: function(req, callback) {
            var id = req.params.id;
            var userData = UserModel.create(
                req.body.firstName,
                req.body.lastName,
                req.body.userName,
                req.body.password,
                req.body.passwordConf,
                req.body.image
            );
            UserService.update(id, userData, callback);
        },

        delete: function(req, callback) {
        }*/
    };
}