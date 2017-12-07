module.exports = {
    constructor: function AppStimmer(id, title, abstract, description, image, user, votes) {
        this.id = id;
        this.title = title;
        this.abstract = abstract;
        this.description = description;
        this.image = image;
        this.user = user;
        this.votes = votes;
    }
};