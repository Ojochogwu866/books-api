const express = require("express");
const router = express.Router();

const {
  deleteBookGoals,
  getBookGoals,
  createBookGoals,
  updateBookGoals,
  getAllBookGoals,
} = require("../controllers/bookGoals");

router.route("/").post(createBookGoals).get(getAllBookGoals);
router
  .route("/:id")
  .get(getBookGoals)
  .delete(deleteBookGoals)
  .patch(updateBookGoals);

module.exports = router;
