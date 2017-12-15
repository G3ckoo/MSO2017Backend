var mongoose = require('mongoose');

module.exports = mongoose.model('AppStimmer', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    abstract: {
        type: String
    },
    description: {
        type: String
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    upvotes: {
        type: Number,
        required: true,
        min: [0, 'Connot be negative']
    },
    downvotes: {
        type: Number,
        required: true,
        min: [0, 'Connot be negative']
    },
    attachments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Attachment'
    }]
}));