const express = require("express");
const router = express.Router();
const {createMovie, getMovies, getMovie} = require("../controllers/movieController");


// Create movie route
router.route('/addmovie').post(createMovie);
router.route('/get-all-movies').get(getMovies);
router.route('/getMovie').get(getMovie);

module.exports = router;