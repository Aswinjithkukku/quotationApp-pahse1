const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js")
const {Excursions} = require("../models")

// create Excursion for superAdmin => /api/excursion/create
exports.addExcursions = catchAsyncErrors( async(req,res,next) => {

    const { name, descriptions, place, price } = req.body

    const excursions = await Excursions.create({
        name,
        descriptions,
        place,
        price  
    })
    
    res.status(201).json({
        success: true,
        excursions
    })
})

// get enquiry Excursion  => /api/excursion/enquiry
exports.excursionEnquiry = catchAsyncErrors( async(req,res,next) => {

    const { id } = req.body

    const excursion = await Excursions.findbyPk(id)
    
    res.status(201).json({
        success: true,
        excursion
    })
})

// get all  Excursion for superAdmin => /api/excursion/all
exports.getExcursions = catchAsyncErrors( async(req,res,next) => {

    const excursions = await Excursions.findAll()
    
    res.status(201).json({
        success: true,
        excursions
    })
})

// update enquiry =>  /api/excursion/enquiry/update
// exports.updateExcursionEnquiry = catchAsyncErrors( async(req,res,next) => {
//     console.log(req.body);
//     // const totalPrice = updatedCheckedState.reduce(
//     //     (sum, currentState, index) => {
//     //       if (currentState === true) {
//     //         console.log(excursions[index].price);
//     //         return sum + Number(excursions[index].price);
//     //       }
//     //       return sum;
//     //     },
//     //     0
//     //   );
//     res.status(200).json({
//         success: true,
//         // excursion
//     })
// })

