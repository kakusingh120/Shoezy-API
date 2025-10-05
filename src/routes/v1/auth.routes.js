const express = require("express");
const router = express.Router();
const authController = require("../../controllers/auth.controller");
const { authenticateJWT, isAdmin } = require("../../middleware/auth");

// Auth routes
router.post("/signup", authController.signup);
router.post("/signin", authController.signin);

// JWT check
router.get("/isAuthenticated", authenticateJWT, authController.isAuthenticated);

// Role check
router.get("/isAdmin", authenticateJWT, isAdmin, authController.isAdmin);

module.exports = router;
