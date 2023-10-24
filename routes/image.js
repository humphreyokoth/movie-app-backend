const express = require('express');
const router = express.Router();
const {image,uploadFiles} = require("../controllers/imageController");
const upload= require("../middlewares/upload");




// creat image route
router.route('/upload',upload.single("file")).post(uploadFiles);
// router.post("/upload", upload.single("file"), imageController.uploadFiles);
module.exports = router;