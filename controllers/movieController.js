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
    movie:movie
 })
});

exports.getMovies = catchAsyncErrors(async(req,res)=>{
  
   const {movieName,genre,plot,releaseDate,notes,ratings} = req.query;
   
})
exports.getMovie = catchAsyncErrors(async(req,res)=>{

})

exports.updateMovie = catchAsyncErrors(async(req,res)=>{
   
})

exports.deletMovie = catchAsyncErrors(async(req,res)=>{

})
