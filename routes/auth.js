const express = require("express");
const router = express.Router();
const authenticateUser = require("../middleware/authentication");

const { login, register, getUserProfile } = require("../controllers/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authenticateUser, getUserProfile);

module.exports = router;
