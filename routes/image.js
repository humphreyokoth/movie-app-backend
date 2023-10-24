const express = require('express');
const router = express.Router();
const {uploadFiles} = require("../controllers/imageController");
const upload= require("../middlewares/upload");




// creat image route
router.route('/upload',upload.single("file")).post(uploadFiles);

module.exports = router;