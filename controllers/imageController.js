const db = require("../sequelize");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Image = db.image;
console.log(Image,"############");

exports.createMovieImage = catchAsyncErrors(async (req, res) => {

  if (!req.file) {
    return res.send("Please select a file.");
  }
  const {originalname} = req.file;
   const image = await Image.create({
    name: originalname,
    url:req.file.path
  });
  
  return res.json({
    message: "File has been uploaded successfully",
    image: image,
  });
});
