const express = require("express");
const route = express.Router();
const {login} = require("../controllers/authController")


// Login route
route.post('/login',login);



module.exports = route;