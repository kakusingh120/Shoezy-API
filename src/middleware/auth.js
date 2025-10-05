const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/server.config");
const ApiError = require("../utils/api.error");

// Middleware to authenticate JWT token
const authenticateJWT = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) {
        return next(new ApiError("AuthError", "No token provided", "Unauthorized", 401));
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return next(new ApiError("AuthError", "Invalid token", "JWT verification failed", 403));
        }
        req.user = decoded; // contains { id, role, iat, exp }
        next();
    });
};

// Middleware to allow only Admin users
const isAdmin = (req, res, next) => {
    if (!req.user || req.user.role.toLowerCase() !== "admin") {
        return next(new ApiError("AuthError", "Forbidden", "Not admin user", 403));
    }
    next();
};

// Middleware to allow Admin OR the user themselves
const isAdminOrSelf = (req, res, next) => {
    const userId = req.params.id;
    if (!req.user) {
        return next(new ApiError("AuthError", "Unauthorized", "No user info", 401));
    }

    if (req.user.role.toLowerCase() === "admin" || req.user.id.toString() === userId) {
        return next();
    }

    return next(new ApiError("AuthError", "Forbidden", "Not authorized to access this user", 403));
};

module.exports = {
    authenticateJWT,
    isAdmin,
    isAdminOrSelf,
};
