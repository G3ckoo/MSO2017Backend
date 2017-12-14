var express = require('express');
var app = express();
var bodyParser = require('body-parser');


// apply polyfills =================================================================================================
// require('./utils/polyfills.js');


// Options =========================================================================================================
var options = {};
options.port = 8080;
options.server_started = "Server started on port " + options.port;

app.use(bodyParser.json());       // to support JSON-encoded bodies           
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true,             
})); 


// RESTful API =====================================================================================================
// login POST /token
require('./REST_API/login.js')(app);
// AppStimmer-operations
require('./REST_API/appstimmer.js')(app);


// Initialize Data =================================================================================================
// put example AppStimmer
require('./db/initialize.js')();


// Launch ===========================================================================================================
app.listen(options.port);
console.log(options.server_started);