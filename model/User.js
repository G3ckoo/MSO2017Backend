module.exports = {
    create: function User(id, firstName, lastName, age, zipCode, favorites, image) {
        return {
            id: id,
            firstName: firstName,
            lastName: lastName,
            image: image,
            age: age,
            zipCode: zipCode,
            favourites: favourites
        }
    }
}