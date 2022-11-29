const express = require("express");
const router = express.Router();
const {
  addExcursions,
  excursionEnquiry,
  getExcursions,
  updateExcursionEnquiry,
} = require("../controllers/excursionControllers");

router.route("/create").post(addExcursions);
router.route("/enquiry").post(excursionEnquiry);
router.route("/all").get(getExcursions);
router.route("/enquiry/update").post(updateExcursionEnquiry);

module.exports = router;
