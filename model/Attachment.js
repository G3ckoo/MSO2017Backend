

module.exports = {
    create: function(appStimmer, isMainAttachment, attachmentType, source, description) {
        return {
            appStimmer: appStimmer,
            isMainAttachment: isMainAttachment,
            attachmentType: attachmentType, // Location, Audio, Video, Picture, Text, Document
            source: source, // Path to File, or Text
            description: description // optional image-description
        }
    }
}