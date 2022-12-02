const express = require("express");
const router = express.Router();
const {
  loadTransferEnquiryData,
  transferEnquiry,
  createTransferCombiniation,
  getAllTransferCombinations,
} = require("../controllers/transferControllers");
const {
  isAuthenticatedUser,
  isAgent,
  isSuperAdmin,
} = require("../middlewares/auth.js");

router
  .route("/loadTransferEnquiryData")
  .get(isAuthenticatedUser,loadTransferEnquiryData);
router.route("/enquiry").post(isAuthenticatedUser, transferEnquiry);
router
  .route("/transferCombination/create")
  .post(isAuthenticatedUser, createTransferCombiniation);
router.route("/all").get(isAuthenticatedUser, getAllTransferCombinations);

module.exports = router;
