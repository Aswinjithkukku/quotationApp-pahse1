const express = require("express");
const router = express.Router();
const {
  prepareQuotation,
  getQuotations,
} = require("../controllers/quotationControllers.js");
const {
  isAuthenticatedUser,
  isAgent,
  isSuperAdmin,
} = require("../middlewares/auth.js");

router.route("/create").post(isAuthenticatedUser, prepareQuotation);
router.route("/lists").get(isAuthenticatedUser, getQuotations);

module.exports = router;
