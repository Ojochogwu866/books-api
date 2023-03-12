const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getCurrentBook,
  updateCurrentBook,
  deleteCurrentBook,
  createCurrentBook,
} = require("../controllers/books");
const { createBookGoals } = require("../controllers/bookGoals");
router.route("/").post(createCurrentBook).get(getAllBooks);
router
  .route("/:id")
  .get(getCurrentBook)
  .delete(deleteCurrentBook)
  .patch(updateCurrentBook);

router.route("/book-goals").post(createBookGoals).get();
module.exports = router;
