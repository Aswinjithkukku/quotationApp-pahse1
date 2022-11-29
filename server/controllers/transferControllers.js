const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js");
const { Transfers, Places, Airports,Countries } = require("../models");

// load places and airport for user => /api/transfer/loadtransferEnquirydata
exports.loadTransferEnquiryData = catchAsyncErrors(async (req, res, next) => {
  const places = await Places.findAll();
  const airports = await Airports.findAll();

  res.status(200).json({
    success: true,
    places,
    airports,
  });
});

// create transfer combination for admins => /api/transfer/transferCombination/create
exports.createTransferCombiniation = catchAsyncErrors( async (req, res, next) => {
    const { transferfrom, transferTo, private, shared } = req.body;
    console.log(transferfrom);

    const airport = await Airports.findOne({ where: { code: transferfrom } });
    const place = await Places.findOne({ where: { id: transferTo } });

    const isExist = await Transfers.findOne({
      where: {
        AirportCode: airport.code,
        PlaceId: place.id,
      },
    });
    // identifying the combination exist or not
    if (!isExist) {
      const transfer = await Transfers.create({
        transferfrom,
        transferTo,
        private,
        shared,
        AirportCode: transferfrom,
        PlaceId: place.id,
        CountryId: place.CountryId
      });

      res.status(201).json({
        success: true,
        transfer,
      });
    }

    res.status(400).json({
      success: false,
      alert: "This combination already exist",
    });
  }
);


// get all transfers for admin => /api/transfer/admin/transfer/all
exports.getAllTransferCombinations = catchAsyncErrors( async(req,res,next) => {
    const transfers = await Transfers.findAll({ include: Places,Countries })

    res.status(200).json({
        success: true,
        transfers,
    })
})

// transfer enquiry for users => /api/tranfer/enquiry
exports.transferEnquiry =  catchAsyncErrors( async(req,res,next) => {

    const { people, airportCode, placeId, transferStatus, returnStatus } = req.body

    const airport = await Airports.findByPk(airportCode) 
    const place = await Places.findByPk(placeId) 

    const transfer = await Transfers.findOne({
        where: {
            AirportCode: airportCode,
            PlaceId: placeId
        }
    })

    let amount = 0
    let total = 0
    // amounts distributed as per number of peoples 
    if(transferStatus === "private") {
        if(people > 4 && people < 9 ) {
            total = transfer.private * 2
            amount = total / people
        } else {
            total = transfer.private
            amount = total / people
        }
    } else {
        amount = transfer.shared * people
        total = amount
    }

    // if the user asked for the return travel
    if (returnStatus === true) {
        amount *= 2
        total *=2
    }

    res.status(200).json({
        success: true,
        transfer,
        airportName: airport.name,
        placeName: place.name,
        totalamount:  total,
        amountPerPerson: amount
    })
})