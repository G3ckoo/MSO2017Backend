var AttachmentTypes = require('../../model/AttachmentTypes.js');
var mongoose = require('mongoose');

module.exports = function(mongoDB) {
    return mongoDB.model('Attachment', new mongoose.Schema({
        appStimmer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'AppStimmer',
            required: true
        },
        isMainAttachment: {
            type: Boolean,
            required: true
        },
        attachmentType: {
            type: String,
            enum: AttachmentTypes.asArray,
            required: true
        },
        source: {
            type: String,
            required: true
        },
        description: {
            type: String
        }
    }));
};