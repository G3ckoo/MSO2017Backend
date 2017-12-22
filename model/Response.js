var Response = {};
Response.create = function(errorMessage, result) {
    return {
        error: errorMessage,
        result: result
    };
};

module.exports = Response;