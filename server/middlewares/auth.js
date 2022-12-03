const jwt = require("jsonwebtoken")
const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js")
const { Users } = require("../models")

// Check if user is authenticated or not
exports.isAuthenticatedUser = catchAsyncErrors( async (req,res,next) => {
    // const token = req.header('Authorization').split(" ")[1];
    const token = req.headers.authorization?.split(" ")[1];
    // if (
    //     req.header.authorization === undefined ||
    //     req.header.authorization.split(' ')[1] === 'undefined'
    // ) {
    //     return res.status(401).json('Allow token first to access this resourse')
    // }

    if(!token) {
        return res.status(401).json('Login first to access this resource')
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await Users.findByPk(decoded.id)

    if(!user) {
        return res.status(401).json('Invalid User')
    }

    req.user = user

    next()
})

// Handling users roles
// exports.authorizeRoles  = (...roles) => {
//     return (req,res,next) => {
//         if(!roles.includes(req.user.role)) {
//             return res.status(403).json(`Role (${req.user.role}) is not allowed to access this resource`)
//         }
//         next()
//     }
// }


exports.isAgent = (req, res, next) => {
    try {
        if (req.user.role !== 'agent' && req.user.role !== 'super-admin') {
            return res.status(403).json(`Role (${req.user.role}) is not allowed to access this resource`)
        }
        next();
    } catch (err) {
        console.log(err);
    }
};

exports.isSuperAdmin = (req, res, next) => {
    try {
        if (req.user.role !== 'super-admin') {
            return res.status(403).json(`Role (${req.user.role}) is not allowed to access this resource`)
        }
        next();
    } catch (err) {
        console.log(err);
    }
};