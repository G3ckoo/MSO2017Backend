module.exports = function(app) {
    
    // First request from client to get a session token
    app.post("/token", function(req, res) {
        var uname = req.body.username;
        var password = req.body.password;
        
        console.log("POST /token (for login)");
        
        var responseParameters = {
            username: uname,
            token: require('../data/token')
        };
        
        if (uname === "admin" && password === "admin") {
            // TODO: add headers for content-type (and -length)
            res.statusCode = 200;
            res.send(responseParameters);
        } else {
            res.statusCode = 401; // unauthorized
            res.send({
                error: "wrong username or password"
            });
        }
    })
}