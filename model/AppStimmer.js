module.exports = {
    create: function(_title, _abstract, _description, _creator, _image, _user) {
        return {
            title: _title,
            abstract: _abstract,
            description: _description,
            creator: _creator,
            upvotes: 0,
            downvotes: 0,
            attachments: []
        }
    }
}