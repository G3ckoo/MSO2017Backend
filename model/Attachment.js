module.exports = {
    create: function(isMainAttachment, attachmentType, source, description) {
        return {
            isMainAttachment: isMainAttachment,
            attachmentType: type, // Location, Audio, Video, Picture, Text, Document
            source: value, // Path to File, or Text
            description: description // optional image-description
        }
    }
}