const ApiError = require("./ApiError");
const { StatusCodes } = require("http-status-codes");

class ValidationError extends ApiError {
    constructor(error) {
        let errorName = error.name || "ValidationError";
        let explanation = [];

        if (error.errors) {
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
        }

        super(
            errorName,
            "Not able to validate the data sent in request",
            explanation,
            StatusCodes.BAD_REQUEST
        );
    }
}

module.exports = ValidationError;
