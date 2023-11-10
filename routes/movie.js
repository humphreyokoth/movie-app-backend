const express = require("express");
const router = express.Router();
const {
  createMovie,
  getMovies,
  getMovie,
  updateMovie,
  deletMovie,
  searchMovies,
  getFavouriteMovies,
  getMovieImages,
  getAllMoviesImage,
} = require("../controllers/movieController");
const uploadFile = require("../middlewares/upload");

router.post("/addmovie", uploadFile.single("image"), createMovie);
router.route("/getmovies").get(getMovies);
router.route("/getmovie").get(getMovie);
router.route("/searchmovie").get(searchMovies);
router.route("/updatemovie").put(updateMovie);
router.route("/deletemovie").delete(deletMovie);
router.route("/favouritemovies").get(getFavouriteMovies);
router.route("/getmovieimage/:id").get(getMovieImages);
router.route("/getallmoviesimage").get(getAllMoviesImage);

module.exports = router;
