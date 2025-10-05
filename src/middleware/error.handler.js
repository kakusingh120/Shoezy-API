// middlewares/errorHandler.js
const { StatusCodes } = require("http-status-codes");

function errorHandler(err, req, res, next) {
    console.error("❌ Error caught:", err);

    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

    res.status(statusCode).json({
        success: false,
        error: {
            name: err.name || "Error",
            message: err.message || "Something went wrong",
            explanation: err.explanation || "Unexpected error occurred",
            statusCode
        }
    });
}

module.exports = errorHandler;
