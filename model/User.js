module.exports = {
    create: function User(firstName, lastName, userName, password, passwordConf, image) {
        return {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            password: password,
            passwordConf: passwordConf,
            imagePath: "images/" + image,
        }
    }
}