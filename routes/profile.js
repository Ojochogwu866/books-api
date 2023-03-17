const express = require("express");
const router = express.Router();

const { getUserProfile } = require("../controllers/auth");

router.route("/:id").get(getUserProfile);
module.exports = router;
