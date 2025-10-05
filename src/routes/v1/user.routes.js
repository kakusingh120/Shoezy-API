const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user.controller");
const { authenticateJWT, isAdmin } = require("../../middleware/auth");

// User CRUD routes
router.get("/:id", authenticateJWT, userController.getUserById);
router.put("/:id", authenticateJWT, userController.updateUser);
router.delete("/:id", authenticateJWT, isAdmin, userController.deleteUser);

module.exports = router;
