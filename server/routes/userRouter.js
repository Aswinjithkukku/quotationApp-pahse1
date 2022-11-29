const express = require("express");
const router = express.Router();
const {
  loginUser,
  registerUser,
  allUsers,
  logoutUser,
  checkToken,
} = require("../controllers/userControllers.js");

const { isAuthenticatedUser } = require('../middlewares/auth')

router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/register").post(registerUser);
router.route("/admin/all").get(allUsers);
router.route("/token").get(isAuthenticatedUser,checkToken);

module.exports = router;
