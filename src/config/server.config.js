require("dotenv").config({ path: './.env' });
const bcrypt = require("bcrypt");

module.exports = {
    PORT: process.env.PORT || 8088,
    SALT: bcrypt.genSaltSync(10) || 10,
    JWT_SECRET: process.env.JWT_SECRET || "AuthKey",
}