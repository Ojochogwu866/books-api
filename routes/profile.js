const express = require("express");
const router = express.Router();

const { getUserProfile } = require("../controllers/auth");

router.get("/profile", getUserProfile);

module.exports = router;
