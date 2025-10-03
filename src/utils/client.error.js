const ApiError = require("./ApiError");

class ClientError extends ApiError {
    constructor(name, message, explanation, statusCode) {
        super(name, message, explanation, statusCode);
    }
}

module.exports = ClientError;
