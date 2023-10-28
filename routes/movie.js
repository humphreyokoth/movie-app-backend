const express = require("express");
const router = express.Router();
const {createMovie, getMovies, getMovie, updateMovie, deletMovie} = require("../controllers/movieController");


// Create movie route
router.route('/addmovie').post(createMovie);
router.route('/getmovies').get(getMovies);
router.route('/getmovie').get(getMovie);
router.route('/updatemovie').put(updateMovie);
router.route('/deletemovie').delete(deletMovie);

module.exports = router;