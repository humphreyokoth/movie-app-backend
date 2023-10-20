const ErrorHandler = require("../utils/errorHandler");
require("dotenv").config();
const db = require("../sequelize");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Movie = db.movie;
const User = db.user;
const {Sequelize} = require('sequelize');
console.log(User);

exports.createMovie = catchAsyncErrors(async(req,res) =>{
  const user = req.user;
 const {movieName,genre,plot,releaseDate,notes,ratings} = req.body;
 const movie = await Movie.create({
    movieName,genre,plot,releaseDate,notes,ratings,
 });
 await movie.setUser(req.user);
 return res.json({
    message:"Created a movie successfully",
    movie:movie,
    user:user,
 })
});
