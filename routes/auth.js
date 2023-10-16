const express = require("express");
const router = express.Router();
const {login,registerUser} = require("../controllers/authController")
const {verifySignUp} = require("../validation/authHelper");


// Login route
router.route('/login').post(login);
// Register route
router.route('/register').post([verifySignUp.checkDuplicateUsernameOrEmail],registerUser);

// Forgot password and reset password routes
// router.route('/password/forgot').post(forgotPassword)
// router.route('/password/reset/:token').put(resetPassword)
// Logout route
// router.route('/logout').get(logout);




module.exports = router;