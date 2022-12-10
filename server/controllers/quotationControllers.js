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

  const quotationNumber = 1000 + quotationfind.length;

  const {
    transferfrom,
    transferTo,
    transferStatus,
    returnStatus,
    people,
    totalamount,
    amountPerPerson,
  } = req.body.transferData;
  const {
    hotelName,
    place,
    hotelpeople,
    roomType,
    nights,
    hoteltotalamount,
    hotelamountPerPerson,
  } = req.body.hoteldata;

  const { excursionPeople, excursions } = req.body.excursionData;

  // create quotation
  let quotation;

  if (
    excursionPeople && excursions ||
    transferfrom &&
      transferTo &&
      transferStatus &&
      people &&
      totalamount &&
      amountPerPerson ||
    hotelName &&
      place &&
      hotelpeople &&
      roomType &&
      nights &&
      hoteltotalamount &&
      hotelamountPerPerson
  ) {
    quotation = await Quotations.create({
      quotationNumber,
      amendmentNumber: 0000,
      QuotationAmendmentId: null,
      UserId: req.user.id,
    });
  } else {
    return res.status(400).json({
      success: false,
      message: "No essential data provided"
    })
  }

  // create quotation amendments
  const amendment = await QuotationAmendments.findAll({
    where: { quotationNumber: quotationNumber },
  });
  const amendmentNumber = amendment + 1;

  const quotationAmendment = await QuotationAmendments.create({
    quotationNumber,
    amendmentNumber,
    TransferQuotationId: null,
    HotelQuotationId: null,
    ExcursionQuotationId: null,
    QuotationId: quotation.id,
    UserId: req.user.id,
  });

  // create transfer quotation

  let transferQuotation;
  if (
    transferfrom &&
    transferTo &&
    transferStatus &&
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
      QuotationAmendmentId: quotationAmendment.id,
      UserId: req.user.id,
    });
  }
  // create hotel quotation

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
      UserId: req.user.id,
    });
  }
  // create excursion quotation

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
      people: excursionPeople,
      totalamount: excursionTotalAmount,
      amountPerPerson: excursionTotalamountPerPerson,
      QuotationAmendmentId: quotationAmendment.id,
      UserId: req.user.id,
    });
  }

  const updateQuotationAmendment = await QuotationAmendments.update(
    {
      transferQuotationId: transferQuotation?.id,
      hotelQuotationId: hotelQuotation?.id,
      excursionQuotationId: excursionQuotation?.id,
    },
    { where: { id: quotationAmendment.id } }
  );

  // update main quotations table
  const updateQuotation = await Quotations.update(
    {
      amendmentNumber: quotationAmendment.amendmentNumber,
      QuotationAmendmentId: quotationAmendment.id,
    },
    { where: { id: quotation.id } }
  );

  res.status(201).json({
    success: true,
    quotation,
  });
});

// list quotation => /api/quotation/lists
exports.getQuotations = catchAsyncErrors(async (req, res, next) => {
  const quotations = await Quotations.findAll({
    include: [
      {
        model: QuotationAmendments,
        include: [
          {
            model: TransferQuotation,
          },
          {
            model: HotelQuotation,
          },
          {
            model: ExcursionQuotation,
          },
        ],
      },
    ],
  });

  res.status(200).json({
    success: true,
    quotations,
  });
});

// find single quotation => /api/quotation/quotation/:id
exports.singleQuotation = catchAsyncErrors(async (req, res, next) => {
  const params = req.params.id;
  const quotation = await Quotations.findOne({
    where: { id: params },
    include: {
      model: QuotationAmendments,
      include: [
        {
          model: TransferQuotation,
        },
        {
          model: HotelQuotation,
        },
        {
          model: ExcursionQuotation,
        },
      ],
    },
  });

  res.status(200).json({
    success: true,
    quotation,
  });
});

// update single quotation => /api/quotation/update/:id
exports.updateQuotation = catchAsyncErrors(async (req, res, next) => {
  const params = req.params.id;
  const quotation = await Quotations.findOne({
    where: { id: params },
    include: { model: QuotationAmendments },
  });

  // create quotation amendments
  const amendment = await QuotationAmendments.findOne({
    where: { QuotationId: quotation.id },
  });

  const amendmentNumber = Number(amendment.amendmentNumber) + 1;

  const quotationAmendment = await QuotationAmendments.create({
    quotationNumber: quotation.quotationNumber,
    amendmentNumber: amendmentNumber,
    TransferQuotationId: null,
    HotelQuotationId: null,
    ExcursionQuotationId: null,
    QuotationId: quotation.id,
    UserId: req.user.id,
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
      returnStatus: returnStatus
        ? returnStatus === true
          ? "true"
          : "false"
        : "false",
      people,
      totalamount,
      amountPerPerson,
      QuotationAmendmentId: quotationAmendment.id,
      UserId: req.user.id,
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
      UserId: req.user.id,
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
      UserId: require.user.id,
    });
  }
  const number = amendmentNumber - 1;
  const recentAmendment = await QuotationAmendments.findOne({
    where: { amendmentNumber: number },
  });

  // update quotation amendments
  const updateQuotationAmendment = await QuotationAmendments.update(
    {
      transferQuotationId: transferQuotation?.id
        ? transferQuotation?.id
        : recentAmendment?.transferQuotationId,
      hotelQuotationId: hotelQuotation?.id
        ? hotelQuotation?.id
        : recentAmendment?.hotelQuotationId,
      excursionQuotationId: excursionQuotation?.id
        ? excursionQuotation?.id
        : recentAmendment?.excursionQuotationId,
    },
    { where: { id: quotationAmendment.id } }
  );

  // update main quotations table
  const updateQuotation = await Quotations.update(
    {
      amendmentNumber: quotationAmendment.amendmentNumber,
      QuotationAmendmentId: quotationAmendment.id,
    },
    { where: { id: quotation.id } }
  );

  res.status(202).json({
    success: true,
  });
});

// finding quotation build bu user => /api/quotation/lists/own
exports.userQuotations = catchAsyncErrors(async (req, res, next) => {
  const params = req.user.id;

  const quotations = await Quotations.findAll({
    where: { UserId: params },
    include: { model: QuotationAmendments },
  });
  res.status(200).json({
    success: true,
    quotations,
  });
});

// get transferQuotationData => /api/quotation/transfer/data/:id
exports.getTransferQuotationData = catchAsyncErrors(async (req, res, next) => {
  const params = req.params.id;
  const transfer = await TransferQuotation.findByPk(params);

  res.status(200).json({
    success: true,
    transfer,
  });
});

// get hotelQuotationData => /api/quotation/hotel/data/:id
exports.getHotelQuotationData = catchAsyncErrors(async (req, res, next) => {
  const params = req.params.id;
  const hotel = await HotelQuotation.findByPk(params);

  res.status(200).json({
    success: true,
    hotel,
  });
});

// get excursionQuotationData => /api/quotation/excursion/data/:id
exports.getExcursionQuotationData = catchAsyncErrors(async (req, res, next) => {
  const params = req.params.id;
  const excursion = await ExcursionQuotation.findByPk(params);

  res.status(200).json({
    success: true,
    excursion,
  });
});
