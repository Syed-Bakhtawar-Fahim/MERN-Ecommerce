const ErrorHandler = require("../utils/errorHandler");


module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error"

    // MongoDB ID Error
    if(err.name === "CastError"){
        const message = `Resource Not Found. Invalid: ${err.path}`
        err = new ErrorHandler(message, 400);
    }
        
    // MongoDB Duplicate key Error
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered `
        err = new ErrorHandler(message, 400);
    }
    // Wrong JWT Error
    if(err.code === "JsonWebTokenError"){
        const message = `Json Web Token is invalid, Try again.`
        err = new ErrorHandler(message, 400);
    }
    // JWT Expires Error
    if(err.code === "TokenExpiredError"){
        const message = `Json Web Token is Expired, Try again.`
        err = new ErrorHandler(message, 400);
    }


    res.status(err.statusCode).json({
        success: false,
        message: err.message
        // error: err
        // error: err.stack
    })
}