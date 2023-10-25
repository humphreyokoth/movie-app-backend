const express = require('express');
const router = express.Router();
const {createMovieImage} = require("../controllers/imageController");
const uploadFile = require("../middlewares/upload");
console.log(uploadFile);

// creat image route
router.post('/addimage', uploadFile.single("image"),createMovieImage);


module.exports = router;