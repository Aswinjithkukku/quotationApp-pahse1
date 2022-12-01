const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const {
  Quotations,
  TransferQuotation,
  HotelQuotation,
  ExcursionQuotation,
  QuotationAmendments,
} = require("../models");

// create quotation => /api/quotation/create
exports.prepareQuotation = catchAsyncErrors(async (req, res, next) => {
  const quotationfind = await Quotations.findAll();
  console.log(req);

  const quotationNumber = 1000 + quotationfind.length;
  // create transfer quotation
  const {
    transferfrom,
    transferTo,
    transferStatus,
    returnStatus,
    people,
    totalamount,
    amountPerPerson,
  } = req.body.transferData;

  let transferQuotation;
  if (
    transferfrom &&
    transferTo &&
    transferStatus &&
    returnStatus &&
    people &&
    totalamount &&
    amountPerPerson
  ) {
    transferQuotation = await TransferQuotation.create({
      quotationNumber,
      transferfrom,
      transferTo,
      transferStatus,
      returnStatus,
      people,
      totalamount,
      amountPerPerson,
      UserId: req.user.id
    });
    // create hotel quotation
  }
  const {
    hotelName,
    place,
    hotelpeople,
    roomType,
    nights,
    hoteltotalamount,
    hotelamountPerPerson,
  } = req.body.hoteldata;

  let hotelQuotation;

  if (
    hotelName &&
    place &&
    hotelpeople &&
    roomType &&
    nights &&
    hoteltotalamount &&
    hotelamountPerPerson
  ) {
    hotelQuotation = await HotelQuotation.create({
      quotationNumber,
      name: hotelName,
      place,
      people: hotelpeople,
      roomType,
      nights,
      totalamount: hoteltotalamount,
      amountPerPerson: hotelamountPerPerson,
      UserId: req.user.id
    });
  }
  // create excursion quotation

  const { excursionPeople, excursions } = req.body.excursionData;

  let excursionQuotation;

  if (excursionPeople && excursions) {
    const excursionTotalamountPerPerson = excursions.reduce(
      (accumulator, object) => {
        return accumulator + Number(object.price);
      },
      0
    );

    const excursionTotalAmount =
      excursionTotalamountPerPerson * excursionPeople;

    excursionQuotation = await ExcursionQuotation.create({
      quotationNumber,
      excursions,
      totalamount: excursionTotalAmount,
      amountPerPerson: excursionTotalamountPerPerson,
      UserId: req.user.id
    });
  }
  // create quotation amendments
  const amendment = await QuotationAmendments.findAll({
    where: { quotationNumber: quotationNumber },
  });
  const amendmentNumber = amendment + 1;
  console.log(amendmentNumber);

  const quotationAmendment = await QuotationAmendments.create({
    quotationNumber,
    amendmentNumber,
    transferQuotationId: transferQuotation?.id,
    hotelQuotationId: hotelQuotation?.id,
    excursionQuotationId: excursionQuotation?.id,
    UserId: req.user.id
  });

  // create quotation

  const quotation = await Quotations.create({
    quotationNumber,
    amendmentNumber,
    QuotationAmendmentId: quotationAmendment.id,
    UserId: req.user.id
  });

  res.status(201).json({
    success: true,
    quotation,
  });
});



// list quotation => /api/quotation/lists
exports.getQuotations = catchAsyncErrors(async (req, res, next) => {

  const quotations = await Quotations.findAll({ include: QuotationAmendments})

  res.status(200).json({
    success: true,
    quotations,
    // transfer,
    // hotel,
    // excursion
  });
});
