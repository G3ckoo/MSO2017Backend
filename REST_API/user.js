var User = require('../model/User.js');
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
            var userData = User.create(
                req.body.firstName,
                req.body.lastName,
                req.body.userName,
                req.body.password,
                req.body.passwordConf,
                req.body.image
            );
            
            User.create(userData, function (err, user) {
                if (err) {
                    console.error(err);
                    status = 500;
                    errorMessage = "User konnte nicht gespeichert werden: " + err;
                }
                else {
                    status = 200;
                    result = user;
                }
                console.log("...");
                res.status(status).send(Response.create(errorMessage, result));
            });
        } 
        else {
            status = 400;
            errorMessage = "Es wurden nicht alle benötigten Parameter übergeben: firstName, lastName, userName, password, passwordConf, image (filename of image)";
            res.status(status).send(Response.create(errorMessage, result));
        }
    });
}