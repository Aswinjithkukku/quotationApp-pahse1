const express = require("express");
const router = express.Router();
const {
  prepareQuotation,
  getQuotations,
  userQuotations,
  getTransferQuotationData,
  getHotelQuotationData,
  getExcursionQuotationData,
  updateQuotation,
} = require("../controllers/quotationControllers.js");
const {
  isAuthenticatedUser,
  isAgent,
  isSuperAdmin,
} = require("../middlewares/auth.js");

router.route("/create").post(isAuthenticatedUser, prepareQuotation);
router.route("/lists").get(isAuthenticatedUser, getQuotations);
router.route("/list/own").get(isAuthenticatedUser, userQuotations);
router.route("/transfer/data/:id").get(isAuthenticatedUser, getTransferQuotationData);
router.route("/hotel/data/:id").get(isAuthenticatedUser, getHotelQuotationData);
router.route("/excursion/data/:id").get(isAuthenticatedUser, getExcursionQuotationData);
router.route("/update/:id").post(isAuthenticatedUser, updateQuotation);


module.exports = router;
