var express = require('express');
var app = express();


// apply polyfills =================================================================================================
// require('./utils/polyfills.js');


// Options =========================================================================================================
var config = require('./config.js');
var bodyParser = require('body-parser');

app.use(bodyParser.json());       // to support JSON-encoded bodies           
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


// Initialize MongoDB/mongoose =====================================================================================
// Set Bluebird as Promises library
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var mongoDB = mongoose.createConnection(
    config.db_connection_string,
    config.db_options
);
mongoDB.on('open', function() {
    console.log(config.db_connected);
});


// Initialize Schemas ==============================================================================================
var Schemas = require('./db/Schemas.js')(mongoDB);


// RESTful API =====================================================================================================
// login POST /token
require('./REST_API/login.js')(app, Schemas);
// AppStimmer-operations
require('./REST_API/appstimmer.js')(app, Schemas);
// User-operations
require('./RESt_API/user.js')(app, Schemas);


// Launch ==========================================================================================================
app.listen(config.server_port);
console.log(config.server_started);