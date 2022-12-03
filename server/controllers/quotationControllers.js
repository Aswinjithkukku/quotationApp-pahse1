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

    // create quotation

    const quotation = await Quotations.create({
      quotationNumber,
      amendmentNumber: 0000,
      QuotationAmendmentId: null,
      UserId: req.user.id
    });

    // create quotation amendments
    const amendment = await QuotationAmendments.findAll({
      where: { quotationNumber: quotationNumber },
    });
    const amendmentNumber = amendment + 1;
    console.log(amendmentNumber);
  
    const quotationAmendment = await QuotationAmendments.create({
      quotationNumber,
      amendmentNumber,
      TransferQuotationId: null,
      HotelQuotationId: null,
      ExcursionQuotationId: null,
      QuotaionId: quotation.id,
      UserId: req.user.id
    });

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
  console.log(returnStatus);
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
      returnStatus : returnStatus ? returnStatus === true
      ? 1
      : 0
    : 0, 
      people,
      totalamount,
      amountPerPerson,
      QuotationAmendmentId: quotationAmendment.id,
      UserId: req.user.id
    });
  }
  // create hotel quotation
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
      QuotationAmendmentId: quotationAmendment.id,
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
      QuotationAmendmentId: quotationAmendment.id,
      UserId: req.user.id
    });
  }

  const updateQuotationAmendment = await QuotationAmendments.update( {
    transferQuotationId: transferQuotation?.id,
    hotelQuotationId: hotelQuotation?.id,
    excursionQuotationId: excursionQuotation?.id,
  }, { where: { id: quotationAmendment.id } } )

    // update main quotations table
    const updateQuotation =  await Quotations.update({
      amendmentNumber: quotationAmendment.amendmentNumber,
      QuotationAmendmentId: quotationAmendment.id
    }, { where: { id: quotation.id } })
  

  res.status(201).json({
    success: true,
    quotation,
  });
});



// list quotation => /api/quotation/lists
exports.getQuotations = catchAsyncErrors(async (req, res, next) => {

  const quotations = await Quotations.findAll({ include: [
    {model: QuotationAmendments,
    include: [{
      model:TransferQuotation
    },{
      model:HotelQuotation
    },{
      model:ExcursionQuotation
    }]}
  ]})

  res.status(200).json({
    success: true,
    quotations,
  });
});

// find single quotation => /api/quotation/quotation/:id
exports.singleQuotation = catchAsyncErrors(async( req,res, next) => {

  const params = req.params.id
  const quotation = await Quotations.findOne({
    where: { id: params },
    include: { model: QuotationAmendments,
    include: [{
      model:TransferQuotation
    },{
      model:HotelQuotation
    },{
      model:ExcursionQuotation
    }] } 
   })

  res.status(200).json({
    success: true,
    quotation
  })
})

// update single quotation => /api/quotation/update/:id
exports.updateQuotation = catchAsyncErrors(async(req,res,next) => {

  const params = req.params.id
  const quotation = await Quotations.findOne({
    where: { id: params },
    include: {model: QuotationAmendments}
  })


      // create quotation amendments
      const amendment = await QuotationAmendments.findAll({
        where: { quotationNumber: quotationNumber },
      });
      const amendmentNumber = amendment + 1;
      console.log(amendmentNumber);
    
      const quotationAmendment = await QuotationAmendments.create({
        quotationNumber: quotation.quotationNumber,
        amendmentNumber,
        TransferQuotationId: null,
        HotelQuotationId: null,
        ExcursionQuotationId: null,
        UserId: req.user.id
      });

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
      quotationNumber: quotation.quotationNumber,
      transferfrom,
      transferTo,
      transferStatus,
      returnStatus : returnStatus ? returnStatus === true
      ? 1
      : 0
    : 0, 
      people,
      totalamount,
      amountPerPerson,
      QuotationAmendmentId: quotationAmendment.id,
      UserId: req.user.id
    });
  }

  // create hotel quotation
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
      quotationNumber: quotation.quotationNumber,
      name: hotelName,
      place,
      people: hotelpeople,
      roomType,
      nights,
      totalamount: hoteltotalamount,
      amountPerPerson: hotelamountPerPerson,
      QuotationAmendmentId: quotationAmendment.id,
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
      quotationNumber: quotation.quotationNumber,
      excursions,
      totalamount: excursionTotalAmount,
      amountPerPerson: excursionTotalamountPerPerson,
      QuotationAmendmentId: quotationAmendment.id,
      UserId: require.user.id
    });
  }
  // update quotation amendments
  const updateQuotationAmendment = await QuotationAmendments.update( {
    transferQuotationId: transferQuotation?.id,
    hotelQuotationId: hotelQuotation?.id,
    excursionQuotationId: excursionQuotation?.id,
  }, { where: { id: quotationAmendment.id } } )

  // update main quotations table
  const updateQuotation =  await Quotations.update({
    amendmentNumber: quotationAmendment.amendmentNumber,
    QuotationAmendmentId: quotationAmendment.id
  }, { where: { id: quotation.id } })

  res.status(202).json({
    success: true
  })
})


// finding quotation build bu user => /api/quotation/lists/:userid
exports.userQuotations = catchAsyncErrors(async(req,res,next) => {
  const params = req.params.id

  const quotations = await Quotations.findAll({ 
    where: { UserId: params },
    include: { model: QuotationAmendments}
   })
  res.status(200).json({
    success: true,
    quotations
  })
})