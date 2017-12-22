var UserModel = require('../model/User.js');

module.exports = function(Schemas) {
    var UserService = require('../services/UserService.js')(Schemas);
    
    return {
        insert: function(req, callback) {
            var userData = UserModel.create(
                req.body.firstName,
                req.body.lastName,
                req.body.userName,
                req.body.password,
                req.body.passwordConf,
                req.body.image
            );
            UserService.insert(userData, callback);
        },

        findById: function(req, callback) {
            var id = req.params.id;
            UserService.findById(id, callback);
        },

        list: function(req, callback) {
            UserService.list(callback);
        },

        update: function(req, callback) {
            var id = req.params.id;
            var userData = UserModel.create(
                req.body.firstName,
                req.body.lastName,
                req.body.userName,
                req.body.password,
                req.body.passwordConf,
                req.body.image
            );
            UserService.update(id, userData, callback);
        },

        delete: function(req, callback) {
            var id = req.params.id;
            UserService.delete(id, callback);
        }
    };
}