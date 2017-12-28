module.exports = {
    create: function(isMainAttachment, attachmentType, source, description) {
        return {
            isMainAttachment: isMainAttachment,
            attachmentType: attachmentType, // Location, Audio, Video, Picture, Text, Document
            source: source, // Path to File, or Text
            description: description // optional image-description
        }
    }
}