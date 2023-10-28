const express = require("express");
const router = express.Router();
const {createMovie, getMovies, getMovie, updateMovie, deletMovie, searchMovies} = require("../controllers/movieController");


// Create movie route
router.route('/addmovie').post(createMovie);
router.route('/getmovies').get(getMovies);
router.route('/getmovie').get(getMovie);
router.route('/searchmovie').get(searchMovies);
router.route('/updatemovie').put(updateMovie);
router.route('/deletemovie').delete(deletMovie);

module.exports = router;