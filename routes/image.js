const express = require('express');
const router = express.Router();
const {createMovieImage, getImage,getImages, updateImage} = require("../controllers/imageController");
const uploadFile = require("../middlewares/upload");
console.log(uploadFile);

// creat image route
router.post('/addimage', uploadFile.single("image"),createMovieImage);
router.get('/getimage/:id',getImage);
router.get('/getImages',getImages);
router.put('/updateimage/:id',updateImage);

module.exports = router;