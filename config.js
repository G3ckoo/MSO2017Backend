var bluebird = require('bluebird');

var config = {};
config.server_port = 8080;
config.server_started = "Server started on port " + config.server_port;
config.db_port = 27017;
config.db_address = '127.0.0.1';
config.db_name = 'stimmAppDev';
config.db_connection_string = "mongodb://" + config.db_address + ":" + config.db_port + "/" + config.db_name;
config.db_connected = "Connected to MongoDB: mongodb://" + config.db_address + ":" + config.db_port + "/" + config.db_name;
config.db_options = {
    promiseLibrary: bluebird
}

module.exports = config;