const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require('jsonwebtoken');
const User = require("../models/userModel");

exports.isAuthentication  = catchAsyncError(async (req, res, next) => {
    const {token} = req.cookies;
    // console.log(token)

    if(!token)
        return next(new ErrorHandler("Please Login to access this resource", 401))

    // const JWT_SECRET = "KFDBFSDBFISDFSD9YSDF8WE9RIEWFUBEIUWIT783Y92U09ID9FDJIFB"
    // const JWT_EXPIRE = 5
    const decodedData = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await User.findById(decodedData.id);
    next()

})

exports.authorizedRole = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)){
           return next(new ErrorHandler(`Role: ${req.user.role} is not allowed to acces this resource`, 403))
        }
        next();
    }
}