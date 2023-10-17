const ErrorHandler = require("../utils/errorHandler");
require("dotenv").config();
const db = require("../sequelize");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Movie = db.movie;
const User = db.user;
const {Sequelize} = require('sequelize');

exports.createMovie = catchAsyncErrors(async(req,res) =>{
 const {movieName,genre,plot,releaseDate,notes,thumbnail} = req.body;
 const movie = await Movie.create({
    movieName,genre,plot,releaseDate,notes,thumbnail
 });
 return res.json({
    message:"Created a movie successfully",
    movie:movie,
 })
});
