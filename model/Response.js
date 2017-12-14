module.exports = {
    create: function(errorMessage, result) {
        return {
            errorMessage: errorMessage,
            result: result
        };
    }
}