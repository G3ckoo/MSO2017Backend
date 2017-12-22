module.exports = {
    create: function(title) {
        return {
            title: title,
            upvotes: 0,
            downvotes: 0,
            attachments: []
        }
    }
}