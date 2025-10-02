require("dotenv").config({ path: './.env' });

module.exports = {
    PORT: process.env.PORT || 8088,
}