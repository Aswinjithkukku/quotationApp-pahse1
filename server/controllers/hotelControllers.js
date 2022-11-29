const catchAsyncErrors = require('../middlewares/catchAsyncErrors.js')

// apppending hotels to the quotation directly = /api/hotel/getPrice
exports.getHotelPrice = catchAsyncErrors(async (req, res, next) => {
  const {
    array,
    nights,
    people,
    hotelName,
    placeName,

  } = req.body;

  // array= [
  //   {
  //     id: 1,
  //     type: onbr,
  //     count: 2,
  //     price: 10
  //   }
  // ]


  let sum = 0

  array.forEach(element => {
    sum += (element.count * element.price)
  });
  
  console.log(sum);

  const totalSum = sum * nights  
  const sumPerPerson = totalSum / people

  
  res.status(201).json({
    success: true,
    sum,
    totalSum,
    sumPerPerson,
    hotelName,
    placeName
  });
});
