const multer = require("multer");
const path = require("path");
const ErrorHandler = require("../utils/errorHandler");

const imageFilter = (req, file, cb) => {
  let ext = path.extname(file.originalname);
  if (
    ext !== ".jpg" &&
    ext !== ".jpeg" &&
    ext !== ".png" &&
    ext !== ".heic" &&
    ext !== ".JPG"
  ) {
    cb(
      new ErrorHandler(
        "Unsupported file type. Use jpg, jpeg,heic,JPG, and png formats"
      ),
      false
    );
    return;
  }
  cb(null, true);
};

const storage = multer.diskStorage({
  destination: "public/images",

  filename: (req, file, cb) => {
    const fileName = file.originalname.replace(/\\/g, "/");
    cb(null, `${Date.now()}--${fileName}`);
  },
});

const upload = multer({ storage: storage, fileFilter: imageFilter });
module.exports = upload;
