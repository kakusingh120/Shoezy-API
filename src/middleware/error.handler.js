const { StatusCodes } = require("http-status-codes");

function errorHandler(err, req, res, next) {
    console.error(err); // Log for debugging

    let statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

    return res.status(statusCode).json({
        success: false,
        name: err.name || "Error",
        message: err.message || "Something went wrong",
        explanation: err.explanation || "Unexpected error occurred",
        statusCode,
    });
}

module.exports = errorHandler;
