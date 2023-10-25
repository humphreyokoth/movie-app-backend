const express = require("express");
const router = express.Router();
const {createMovie, getMovies, getMovie, updateMovie, deletMovie} = require("../controllers/movieController");


// Create movie route
router.route('/addmovie').post(createMovie);
router.route('/get-all-movies').get(getMovies);
router.route('/getMovie').get(getMovie);
router.route('/updateMovie').put(updateMovie);
router.route('/deleteMovie').delete(deletMovie);

module.exports = router;