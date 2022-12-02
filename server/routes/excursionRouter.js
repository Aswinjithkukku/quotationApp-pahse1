const express = require("express");
const router = express.Router();
const {
  addExcursions,
  excursionEnquiry,
  getExcursions,
} = require("../controllers/excursionControllers");

const { isAuthenticatedUser,isAgent,isSuperAdmin } = require('../middlewares/auth.js')

router.route("/create").post(isAuthenticatedUser,addExcursions);
router.route("/enquiry").post(isAuthenticatedUser,excursionEnquiry);
router.route("/all").get(isAuthenticatedUser,getExcursions);

module.exports = router;
