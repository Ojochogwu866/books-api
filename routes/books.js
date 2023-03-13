const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getCurrentBook,
  updateCurrentBook,
  deleteCurrentBook,
  createCurrentBook,
} = require("../controllers/books");
const {
  deleteBookGoals,
  getBookGoals,
  createBookGoals,
  updateBookGoals,
  getAllBookGoals,
} = require("../controllers/bookGoals");
const {
  deleteBookStats,
  getBookStats,
  createBookStats,
  updateBookStats,
  getAllBookStats,
} = require("../controllers/bookStats");
router.route("/").post(createCurrentBook).get(getAllBooks);
router
  .route("/:id")
  .get(getCurrentBook)
  .delete(deleteCurrentBook)
  .patch(updateCurrentBook);

router.route("/book-goals").post(createBookGoals).get(getAllBookGoals);
router
  .route("/book-goals/:id")
  .get(getBookGoals)
  .delete(deleteBookGoals)
  .patch(updateBookGoals);

router.route("/book-stats").post(createBookStats).get(getAllBookStats);
router
  .route("/book-goals/:id")
  .get(getBookStats)
  .delete(deleteBookStats)
  .patch(updateBookStats);
module.exports = router;
