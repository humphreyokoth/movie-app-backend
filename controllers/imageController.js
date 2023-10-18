const fs = require("fs");

const db = require("../models");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Image = db.images;

exports.uploadFiles = catchAsyncErrors(async (req, res) => {
  console.log(req.file);
  if (req.file == undefined) {
    return res.send("Please select a file.");
  }
  const { mimetype, originalname, filename } = req.file;
  const image = await Image.create({
    type: mimetype,
    name: originalname,
    data: fs.readFileSync(
      __basedir + "/public/static/assets/uploads" + filename
    ),
  });
  fs.writeFileSync(
    __basedir + "/public/static/assets/uploads/" + image.name,
    image.data
  );
  return res.json({
    message: "File has been uploaded successfully",
    image: image,
  });
});
