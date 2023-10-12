const express = require("express");
const router = express.Router();
const {login} = require("../controllers/authController")


// Login route
router.route('/login').post(login);
// Register route
// router.route('/register').post(registerUser);

// Forgot password and reset password routes
// router.route('/password/forgot').post(forgotPassword)
// router.route('/password/reset/:token').put(resetPassword)
// Logout route
// router.route('/logout').get(logout);




module.exports = router;