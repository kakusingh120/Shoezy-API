const authService = require("../services/auth.service");
const catchAsync = require("../utils/catchAsync");

// Signup Controller
const signup = catchAsync(async (req, res) => {
    const user = await authService.signup(req.body);
    res.status(201).json({
        success: true,
        data: user,
        error: {},
        message: "User signed up successfully."
    });
});

// Signin Controller
const signin = catchAsync(async (req, res) => {
    const { email, password } = req.body;
    const result = await authService.signin(email, password);
    res.status(200).json({
        success: true,
        data: result,
        error: {},
        message: "User signed in successfully."
    });
});

// Authenticated Route
const isAuthenticated = catchAsync(async (req, res) => {
    res.json({
        success: true,
        user: req.user
    });
});

// Admin Check Route
const isAdmin = catchAsync(async (req, res) => {
    res.json({
        success: true,
        message: "You are an admin"
    });
});

module.exports = {
    signup,
    signin,
    isAuthenticated,
    isAdmin,
};
