module.exports = {
    constructor: function User(id, firstName, lastName, age, zipCode, favorites, image) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.image = image;
        this.age = age;
        this.zipCode  = zipCode;
        this.favorites = favorites;
    }
};