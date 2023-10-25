const ErrorHandler = require("../utils/errorHandler");
require("dotenv").config();
const db = require("../sequelize");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Movie = db.movie;
const User = db.user;
const { Sequelize } = require("sequelize");

exports.createMovie = catchAsyncErrors(async (req, res) => {
  const user = req.user;
  const { movieName, genre, plot, releaseDate, notes, ratings } = req.body;
  const movie = await Movie.create({
    movieName,
    genre,
    plot,
    releaseDate,
    notes,
    ratings,
  });
  await movie.setUser(req.user);
  return res.json({
    message: "Created a movie successfully",
    movie: movie,
  });
});

// Get all movies details   =>   /api/v1/movies;
exports.getMovies = catchAsyncErrors(async (req, res) => {
  const getMovieList = await Movie.findAll();
  return res.json({
    message: "List of movies",
    getMovieList,
  });
});
// Get single movie details   =>   /api/v1/movie/:id
exports.getMovie = catchAsyncErrors(async (req, res, next) => {
  // + used to query  an integer
  const id = +req.query.id;
  console.log(id);
  const movie = await Movie.findByPk(id);
  if (!movie) {
    return next(new ErrorHandler("Movie Not found", 404));
  }
  res.status(200).json({
    success: true,
    movie,
  });
});

exports.updateMovie = catchAsyncErrors(async (req, res, next) => {
  const id = req.query.id;
   let movie = await Movie.findByPk(id);
  if (!movie) {
    return next(new ErrorHandler("Movie not found", 404));
  }
  movie = await Movie.update(
   req.body,{
    where:{id:id},  
   }
   );
  res.status(200).json({
    success: true,
    message: "Movie updated successfully",
  });
});

exports.deletMovie = catchAsyncErrors(async (req, res,next) => {
  const movie = await Movie.findByPk(req.query.id);
  if (!movie) {
    return next(new ErrorHandler("Movie not found", 404));
  }
  await movie.destroy();

  res.status(200).json({
    success: true,
    message: "Movie deleted successfully",
  });
});
