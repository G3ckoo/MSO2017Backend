var mongoose = require('mongoose');

module.exports = mongoose.model('Attachment', new mongoose.Schema({
    type: {
        type: String,
        enum: [
            "Location", 
            "Audio",
            "Video",
            "Picture",
            "Text",
            "Document"
        ],
        required: true
    },
    value: {
        type: String,
        required: true
    }
}));