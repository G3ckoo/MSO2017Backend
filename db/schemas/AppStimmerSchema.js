var mongoose = require('mongoose');

module.exports = function(mongoDB) {
    return mongoDB.model('AppStimmer', new mongoose.Schema({
        title: {
            type: String,
            required: true,
            trim: true
        },
        upvotes: {
            type: Number,
            min: [0, 'Connot be negative']
        },
        downvotes: {
            type: Number,
            min: [0, 'Connot be negative']
        },
        attachments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Attachment'
        }]
    }));
};