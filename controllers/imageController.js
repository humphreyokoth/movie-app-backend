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

// Get single image details   =>   /api/v1/movie/:id
exports.getImage = catchAsyncErrors(async (req, res, next) => {
  // + used to query  an integer
  const id = +req.query.id;
  console.log(id);
  const image = await Image.findByPk(id);
  if (!image) {
    return next(new ErrorHandler("Image  Not found", 404));
  }
  res.status(200).json({
    success: true,
    image,
  });
});
