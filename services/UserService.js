module.exports = function(Schemas) {
    var User = Schemas.User;
    
    return {
        insert: function(userModel, callback) {
            var user = new User(userModel);
            user.save(callback);
        },

        findById: function(userID, callback) {
            User.findById(userID, callback);
        },

        list: function(callback) {
            User.find().then(callback);
        },

        update: function(userID, userModel, callback) {
            User.findById(userID, function(err, user) {
                if (err) callback(err, null);

                user.firstName = userModel.firstName || user.firstName;
                user.lastName = userModel.lastName || user.lastName;
                user.image = userModel.image || user.image;
                user.password = userModel.password || user.password;
                user.passwordConf = userModel.passwordConf || user.passwordConf;
                user.save(callback);
            });
        },

        delete: function(userID, callback) {
            User.findByIdAndRemove(userID, callback);
        }
    };
}