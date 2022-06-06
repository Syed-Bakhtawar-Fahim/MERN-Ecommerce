const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeature = require("../utils/apifeatures");


// Create a Product -- Admin
exports.createProduct = catchAsyncError( async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
})

// Get All Products
exports.getAllProducts = catchAsyncError(async (req, res) => {

    const resultPerPage = 5;
    const productCount = await Product.countDocument();
    const apiFeature = new ApiFeature(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
    const products = await apiFeature.query;
     res.status(200).json(
         {
             success: true,
             products,
             productCount
         })
 })

// Get Product Details OR Single Product 
exports.getProductDetails = catchAsyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if(!product)
        return next(new ErrorHandler("Product Not Found", 404));

    res.status(200).json({
        success:true,
        product
    })
})


// Update a Product -- Admin
exports.updateProduct = catchAsyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if(!product)
    return next(new ErrorHandler("Product Not Found", 404));

    product = await Product.findByIdAndUpdate(req.params.id, req.body,
        {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })

    res.status(200).json({
        success: true,
        product
    })

})
// Delete a Product -- Admin
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if(!product)
        return next(new ErrorHandler("Product Not Found", 404));

    await product.remove();
    res.status(200).json({
        success:true,
        message: "Product delete successfully"
    })
})

