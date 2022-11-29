const express = require("express");
const router = express.Router();
const {
  getCountries,
  createPlace,
  getPlaces,
  getAirports,
} = require("../controllers/locationControllers");

router.route("/countries").get(getCountries);
router.route("/place/create").post(createPlace);
router.route("/places").get(getPlaces);
router.route("/airports").get(getAirports);

module.exports = router;
