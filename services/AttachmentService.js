module.exports = function(Schemas) {
    var Attachment = Schemas.Attachment;
    var AppStimmer = Schemas.AppStimmer;
    
    return {
        insert: function(appStimmerID, attachmentModel, callback) {
            var attachment = new Attachment(attachmentModel);
            attachment.save(function(err, attachment) {
                if (err) {
                    callback(err, null);
                }
                else {
                    AppStimmer.update({_id: appStimmerID}, { 
                        $push: { attachments: attachment } 
                    }, {}, function(err, appStimmer) {
                        console.log("AppStimmer wurde aktualisiert: " + appStimmer);
                        callback(err, attachment);
                    });
                }
            });
        },

        findById: function(attachmentID, callback) {
            Attachment.findById(attachmentID, callback);
        },

        list: function(appStimmerID, callback) {
            AppStimmer.findById(appStimmerID, 'attachments', callback);//.exec(callback);
        },
        
        listAttachments: function(callback) {
            Attachment.find({}, callback);
        },

        update: function(attachmentID, attachmentModel, callback) {
            Attachment.findById(attachmentID, function(err, attachment) {
                if (err) callback(err, null);

                attachment.isMainAttachment = attachmentModel.isMainAttachment || attachment.isMainAttachment;
                attachment.attachmentType = attachmentModel.attachmentType || attachment.attachmentType;
                attachment.source = attachmentModel.source || attachment.source;
                attachment.description = attachmentModel.description || attachment.description;
                attachment.save(callback);
            });
        },

        delete: function(attachmentID, callback) {
            Attachment.findByIdAndRemove(attachmentID, function(err, attachment) {
                AppStimmer.update({}, { 
                    $pop: { attachments: attachment } 
                }, {}, function(err, appStimmer) {
                    callback(err, attachment);
                });
            });
        }
    };
}