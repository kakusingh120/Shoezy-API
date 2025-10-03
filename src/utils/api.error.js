const { StatusCodes } = require("http-status-codes");

class ApiError extends Error {
    constructor(
        name = "ApiError",
        message = "Something went wrong",
        explanation = "Something went wrong",
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    ) {
        super(message);
        this.name = name;
        this.explanation = explanation;
        this.statusCode = statusCode;
    }
}

module.exports = ApiError;
