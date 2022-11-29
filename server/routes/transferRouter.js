const express = require("express");
const router = express.Router();
const {
  loadTransferEnquiryData,
  transferEnquiry,
  createTransferCombiniation,
  getAllTransferCombinations,
} = require("../controllers/transferControllers");

router.route("/loadTransferEnquiryData").get(loadTransferEnquiryData);
router.route("/enquiry").post(transferEnquiry);
router.route("/transferCombination/create").post(createTransferCombiniation);
router.route("/all").get(getAllTransferCombinations);

module.exports = router;
