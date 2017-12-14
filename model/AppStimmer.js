module.exports = {
    create: function(_id, _title, _abstract, _description, _image, _user, _upvotes, _downvotes) {
        return {
            id: _id,
            title: _title,
            abstract: _abstract,
            description: _description,
            image: _image,
            creator: _user,
            upvotes: _upvotes,
            downvotes: _downvotes
        }
    }
}