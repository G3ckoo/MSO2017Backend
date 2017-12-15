module.exports = {
    create: function(type, value) {
        return {
            type: type, // Location, Audio, Video, Picture, Text, Document
            value: value // Path to File or Text
        }
    },
    
    types: {
        LOCATION: "Location",
        AUDIO: "Audio",
        VIDEO: "Video",
        PICTURE: "Picture",
        TEXT: "Text",
        DEOCUMENT: "Document"
    }
}