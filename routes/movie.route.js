const express = require("express");
const router = express.Router();
const {createMovie} = require("../controllers/movieController");


// Create movie route
router.route('/addmovie').post(createMovie);

module.exports = router;