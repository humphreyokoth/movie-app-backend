const express = require("express");
const router = express.router();
const {image} = require("../controllers/imageController");


// creat image route
router.route("/addimage").post(image);
module.exports = router;