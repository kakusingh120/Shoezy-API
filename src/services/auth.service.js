// services/auth.service.js
const userRepo = require("../repository/user.repository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SALT, JWT_SECRET } = require("../config/server.config");
const ApiError = require("../utils/api.error");

const signup = async (userData) => {
    const existing = await userRepo.findByEmail(userData.email);
    if (existing) {
        throw new ApiError(
            "SignupError",
            "Email already registered",
            "Duplicate email",
            400
        );
    }

    const hashPassword = await bcrypt.hash(userData.password, SALT);
    const response = await userRepo.create({ ...userData, password: hashPassword });

    return response;
};

const signin = async (email, password) => {
    const user = await userRepo.findByEmail(email);
    if (!user) {
        throw new ApiError(
            "AuthError",
            "Invalid email or password",
            "User not found",
            401
        );
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw new ApiError(
            "AuthError",
            "Invalid email or password",
            "Password mismatch",
            401
        );
    }

    const token = jwt.sign(
        {
            id: user.id,
            role: user.role
        },
        JWT_SECRET,
        { expiresIn: "1h" }
    );

    // return only safe fields (avoid sending hashed password back)
    return {
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        },
        token
    };
};

module.exports = {
    signup,
    signin,
};
