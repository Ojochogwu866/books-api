const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getBookGoals,
  getCurrentBook,
  getBookStats,
  updateBookGoals,
  updateBookStats,
  updateCurrentReading,
  createBookGoals,
  createBookStats,
  createCurrentReading,
} = require("../controllers/books");

router.route("/").post(createCurrentReading).get(getCurrentBook);
router.route("/:id").post(createCurrentReading).get(getCurrentBook);

module.exports = router;
