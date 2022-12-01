const express = require("express");
const router = express.Router();
const {
  getCountries,
  createPlace,
  getPlaces,
  getAirports,
} = require("../controllers/locationControllers");
const {
  isAuthenticatedUser,
  isAgent,
  isSuperAdmin,
} = require("../middlewares/auth.js");

router.route("/countries").get(isAuthenticatedUser, getCountries);
router.route("/place/create").post(isAuthenticatedUser, createPlace);
router.route("/places").get(isAuthenticatedUser, getPlaces);
router.route("/airports").get(isAuthenticatedUser, getAirports);

module.exports = router;
