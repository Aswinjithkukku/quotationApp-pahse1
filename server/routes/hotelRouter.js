const express = require("express");
const router = express.Router();
const {
  getHotelPrice
} = require("../controllers/hotelControllers");
const { isAuthenticatedUser,isAgent,isSuperAdmin } = require('../middlewares/auth.js')

router.route("/getPrice").post(isAuthenticatedUser,getHotelPrice);

module.exports = router;
