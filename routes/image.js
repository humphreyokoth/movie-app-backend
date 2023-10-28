const express = require('express');
const router = express.Router();
const {createMovieImage, getImage} = require("../controllers/imageController");
const uploadFile = require("../middlewares/upload");
console.log(uploadFile);

// creat image route
router.post('/addimage', uploadFile.single("image"),createMovieImage);
router.get('/getimage/:id',getImage);


module.exports = router;