const db = require("../sequelize");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Image = db.image;
console.log(Image, "############");

exports.createMovieImage = catchAsyncErrors(async (req, res) => {
  if (!req.file) {
    return res.send("Please select a file.");
  }
  const { originalname } = req.file;
  let url = req.file.path;
  url = url.replace(/\\/g,'/');
  const image = await Image.create({
    name: originalname,
    url,
    movieId: req.body.movieId,
  });
console.log(image.url);
  return res.json({
    message: "File has been uploaded successfully",
    image: image,
  });
});

// Get single image details   =>   /api/v1/image/:id
exports.getImage = catchAsyncErrors(async (req, res, next) => {
  // + used to query  an integer
  const id = +req.params.id;
  console.log(id);
  const image = await Image.findByPk(id);

  if (!image) {
    return next("Image  Not found", 404);
  }
  //  const imageUrl = image.url
  res.status(200).json({
    success: true,
    image,
  });
});
exports.getImages = catchAsyncErrors(async(req,res)=>{
  const images = await Image.findAll();
  res.status(200).json({
    success:true,
    images,
  });
})

// Update image
exports.updateImage = catchAsyncErrors(async (req, res) => {
  const id = +req.params.id;
  const image = await Image.findOne({where:{id}});
  if (!image) {
    return next(new ErrorHandler("Image not found", 404));
  }
  const { name, url } = req.body;
  await image.update({
    name,url
  });

  res.status(200).json({
    success: true,
    image: image,
  });
});
