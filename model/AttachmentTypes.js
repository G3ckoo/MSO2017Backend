var types = [
    "Location", // 0
    "Audio",    // 1
    "Video",    // 2
    "Picture",  // 3
    "Text",     // 4
    "Document"  // 5
];
var attachmentTypes = {}
attachmentTypes.LOCATION = types[0];
attachmentTypes.AUDIO = types[1];
attachmentTypes.VIDEO = types[2];
attachmentTypes.PICTURE = types[3];
attachmentTypes.TEXT = types[4];
attachmentTypes.DOCUMENT = types[5];
attachmentTypes.asArray = types;

module.exports = attachmentTypes;