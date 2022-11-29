const express = require("express");
const router = express.Router();
const {
  getHotelPrice
} = require("../controllers/hotelControllers");

router.route("/getPrice").post(getHotelPrice);

module.exports = router;
