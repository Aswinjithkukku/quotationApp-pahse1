const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js")
const { Countries, Places, Airports } = require('../models')


// get all countries for admin => /api/location/countries
exports.getCountries = catchAsyncErrors( async(req,res,next) => {

    const countries = await Countries.findAll()

    res.status(200).json({
        success: true,
        countries
    })
})

// create places for admin => /api/location/place/create
exports.createPlace = catchAsyncErrors( async(req,res,next) => {

    const{ name, description, countryId } = req.body

    const place = await Places.create({
        name,
        description,
        CountryId: countryId
    })

    res.status(201).json({
        success: true,
        place
    })
})

// get places for admin => /api/location/places
exports.getPlaces = catchAsyncErrors( async(req,res,next) => {

    const places = await Places.findAll({ include: Countries })

    res.status(200).json({
        success: true,
        places
    })
})

// get airports for admin => /api/location/airports
exports.getAirports = catchAsyncErrors( async(req,res,next) => {

    const airports = await Airports.findAll()

    res.status(200).json({
        success: true,
        airports
    })
})