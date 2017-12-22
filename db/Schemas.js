//module.init = function(mongoDB) {
//    this.isInitialized = false;
//    if (!this.isInitialized) {
//        this.schemas = {
//            AppStimmer: require('./schemas/AppStimmerSchema.js')(mongoDB),
//            Attachment: require('./schemas/AttachmentSchema.js')(mongoDB),
//            User: require('./schemas/UserSchema.js')(mongoDB)
//        }
//        console.log("Initialized Database.");
//        this.isInitialized = true;
//    }
//    return this;
//};
//
//module.exports = {
//    GetSchemas: function() {
//        return this.schemas;
//    }
//};

/*var Schemas = {};

module.exports = function(mongoDB) {
    this.Schemas = {};
    
    this.initialize = function() {
        var isInitialized = false;
        if (!isInitialized) {
            this.Schemas.AppStimmer = require('./schemas/AppStimmerSchema.js')(mongoDB);
            this.Schemas.Attachment = require('./schemas/AttachmentSchema.js')(mongoDB);
            this.Schemas.User = require('./schemas/UserSchema.js')(mongoDB);
            console.log("Initialized Database.");
        }
    }.bind(this);
     
    return this;
};*/

/*function HasOwnProperties(obj) {
    if (obj != undefined) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return true;
            }
        }
    }
    return false;
}

module.exports = (function(mongoDB) {
    var isInitialized = false;
    this.Schemas = {};
    if (!isInitialized) {
        if (mongoDB == undefined) {
            console.log("Cannot initialize Database Schemas: 'mongoDB' is undefined");
        }
        else {
            this.Schemas.AppStimmer = require('./schemas/AppStimmerSchema.js')(mongoDB);
            this.Schemas.Attachment = require('./schemas/AttachmentSchema.js')(mongoDB);
            this.Schemas.User = require('./schemas/UserSchema.js')(mongoDB);
            isInitialized = true;
        }
    }
    return this.Schemas;
})();*/

module.exports = function(mongoDB) {
    this.isInitialized = false;
    if (!this.isInitialized) {
        this.Test = {};
        this.AppStimmer = require('./schemas/AppStimmerSchema.js')(mongoDB);
        this.Attachment = require('./schemas/AttachmentSchema.js')(mongoDB);
        this.User = require('./schemas/UserSchema.js')(mongoDB);
        this.isInitialized = true;
    }
    return this;
}

/*module.exports.GetSchemas = function() {
    if (this.isInitialized) {
        return this.test;
        //return this.Schemas;
    }
    else {
        console.log("You have to initialize Schemas before you can access it.");
        return null;
    }
}*/