var UserCtrl = require('../controller/UserCtrl.js');
var Response = require('../model/Response.js');

module.exports = function(app) {
    
    function ContainsUserParams(req) {
        return req.body.firstName &&
               req.body.lastName &&
               req.body.userName &&
               req.body.password &&
               req.body.passwordConf &&
               req.body.image;
    }
    
    // Registriert einen neuen Benutzer
    app.post('/User', function(req, res) {
        var status = 501, errorMessage = '', result = '';
        if (ContainsUserParams(req)) {
            UserCtrl.insert(req, function (err, user) {
                if (err) {
                    console.error(err);
                    status = 500;
                    errorMessage = err;
                }
                else {
                    status = 200;
                    result = user;
                }
                res.status(status).send(Response.create(errorMessage, result));
            });
        } 
        else {
            status = 400;
            errorMessage = "Es wurden nicht alle benötigten Parameter übergeben: firstName, lastName, userName, password, passwordConf, image (filename of image)";
            res.status(status).send(Response.create(errorMessage, result));
        }
    });
    
    
    app.get('/User/:id', function(req, res) {
        UserCtrl.findById(req, function(err, user) {
            if (err) {
                res.status(500).send(Response.create(err, null));
            } else {
                res.status(200).send(Response.create(null, user));
            }
        });
    });
    
    app.get('/Users', function(req, res) {
        UserCtrl.list(req, function(users) {
            if (users == undefined) {
                result = [];
            } else {
                result = users;
            }
            res.status(200).send(Response.create("", result));
        });
    });
    
    app.delete('/User/:id', function(req, res) {
        UserCtrl.delete(req, function(err, user) {
            var status = 501, error = '', result;
            if (err) {
                status = 500;
                error = err;
            } else {
                status = 200;
                result = user;
            }
            res.status(status).send(Response.create(error, result));
        })
    });
}