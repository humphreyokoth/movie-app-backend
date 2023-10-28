const multer = require("multer");
const path = require("path");
const ErrorHandler = require("../utils/errorHandler");

const imageFilter = (req, file, cb) => {
  let ext = path.extname(file.originalname);
  if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
    cb(new ErrorHandler("Unsupported file type. Use jpg, jpeg and png formats"), false);
    return;
  }
  cb(null, true);
};

const storage =  multer.diskStorage({
    destination: "images",
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}--${file.originalname}`);
    },
   
  })
 
 const upload = multer({storage:storage,fileFilter:imageFilter})
module.exports = upload;
