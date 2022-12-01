const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js");

// apppending hotels to the quotation directly = /api/hotel/getPrice
exports.getHotelPrice = catchAsyncErrors(async (req, res, next) => {
  const { filteredData, hotelData } = req.body;

  // hotelData= 
  //   {
  //  people(pin):"2"
  // hotelName(pin):"arabic"
  // placeName(pin):"malappuram"
  // nights(pin):"2"
  //   }
  // filteredData= [
  //   {
  // roomType(pin):"twoBr"
  // count(pin):"1"
  // price(pin):"1000"
  //   }
  // ]

  let sum = 0;

  filteredData.forEach((element) => {
    sum += element.count * element.price;
  });

  console.log(sum);

  const totalSum = sum * hotelData.nights;
  const sumPerPerson = totalSum / hotelData.people;

  res.status(201).json({
    success: true,
    sum,
    totalSum,
    sumPerPerson,
  });
});
