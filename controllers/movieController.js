const ErrorHandler = require("../utils/errorHandler");
require("dotenv").config();
const db = require("../sequelize");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Movie = db.movie;
const User = db.user;
const { Sequelize } = require("sequelize");
const { Op } = require("sequelize");
const axios = require("axios");

exports.createMovie = catchAsyncErrors(async (req, res) => {
  const user = req.user;
  const { title, genre, plot, releaseDate, notes, ratings } = req.body;

  // Fetch movie details from OMDB
  const omdbApiKey = process.env.omdbApiKey;
  const omdbUrl = `http://www.omdbapi.com/?t=${title}&apikey=${omdbApiKey}`;

  const omdbResponse = await axios.get(omdbUrl);

  // Initialize IMDB rating
  let imdbRating = null;

  if (omdbResponse.data.Response === "True" && omdbResponse.data.imdbRating) {
    imdbRating = parseFloat(omdbResponse.data.imdbRating);

    // Compare IMDB rating with provided rating
    if (ratings?.imdb && imdbRating !== null && ratings.imdb >= imdbRating) {
      // Use provided rating if higher
      imdbRating = ratings.imdb;
    }
  } else {
    console.log("No valid IMDB rating returned from OMDB");
  }

  // Create movie with integrated IMDB rating
  const movie = await Movie.create({
    title,
    genre,
    plot,
    releaseDate,
    notes,
    ratings: { imdb: imdbRating },
  });

  await movie.setUser(user);

  res.status(200).json({
    message: "Created movie successfully",
    movie,
  });
});

// Get all movies details   =>   /api/v1/movies;
exports.getMovies = catchAsyncErrors(async (req, res) => {
  const getMovieList = await Movie.findAll();
  return res.status(200).json({
    message: "List of movies",
    getMovieList:getMovieList
  });
});



// Return to 10 favourite movies through pagination
exports.getFavouriteMovies = catchAsyncErrors(async (req, res) => {
  const PAGE_SIZE = 10;
  const { page = 1 } = req.query;

  const offset = (page - 1) * PAGE_SIZE;

  const movies = await Movie.findAll({
    limit: PAGE_SIZE,
    offset: offset 
  });

  const favouriteMovies = await Movie.count();
  
  const pageCount = Math.ceil(favouriteMovies / PAGE_SIZE);

  res.status(200).json({
    movies,
    pageCount
  });

});
// search movie by title

exports.searchMovies = catchAsyncErrors(async (req, res) => {
  const { title } = req.query;

  const movies = await Movie.findOne({
    where: {
      title: title,
    },
  });
  if (!movies) {
    return res.status(404).json({
      success: false,
      message: "Movie not found",
    });
  }
  res.json({
    message: "Movie found successfully",
    movies,
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
// update movie => /api/v1/update/movie/:id
exports.updateMovie = catchAsyncErrors(async (req, res, next) => {
  const id = req.query.id;
  let movie = await Movie.findByPk(id);
  if (!movie) {
    return next(new ErrorHandler("Movie not found", 404));
  }
  movie = await Movie.update(req.body, {
    where: { id: id },
  });
  res.status(200).json({
    success: true,
    message: "Movie updated successfully",
  });
});

// delete movie => /api/v1/delete/movie/:id
exports.deletMovie = catchAsyncErrors(async (req, res, next) => {
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
