const express = require("express");
const router = express.Router();

const v1AuthApiRoutes = require("./v1/auth.routes");
const v1UserApiRoutes = require("./v1/user.routes");


// route => /api/v1/user/sign-up
router.use("/v1/auth", v1AuthApiRoutes);
router.use("/v1/user", v1UserApiRoutes);

module.exports = router;