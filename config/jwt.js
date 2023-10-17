require('dotenv').config();
module.exports = {
    secret: "process.env.JWT_SECRET",
    JWT_EXPIRES_TIME: "3600"
}