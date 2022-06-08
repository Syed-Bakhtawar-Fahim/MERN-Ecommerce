const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReviews, deleteReview, deleteAllProduct } = require("../controller/productController");
const { isAuthentication, authorizedRole} = require("../middleware/auth");


const router = express.Router();

// Products API Used
router.route("/products").get( getAllProducts);
router.route("/admin/product/new").post(isAuthentication, authorizedRole("admin"), createProduct);
router
.route("/admin/product/:id")
.put(isAuthentication, authorizedRole("admin"), updateProduct)
.delete(isAuthentication, authorizedRole("admin"), deleteProduct)

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthentication, createProductReview)
router.route("/reviews")
.get(getProductReviews)
.delete(isAuthentication, deleteReview) 
router.route("/admin/products/delete").delete(isAuthentication, authorizedRole("admin"), deleteAllProduct)

module.exports = router;


/* 
{
    "name": "Product1",
    "price": 1200,
    "description": "This is a sample Product",
    "category": "Laptop",
    // "images": [
        "public_id": "sample image",
        "url": "sample url"
    // ]

// }

// {
    "name": "Product1",
    "price": 1200,
    "description": "This is a sample Product",
    "category": "Laptop",
    "Stock": 12,
    "numOfReviews": 13,
    "reviews": {
        "name" : "Aki",
        "rating": 4,
        "comment": "good"
    },
    "images": {
        "public_id": "sample image",
        "url": "sample url"
    }

// }

 "name": "admin",
    "email": "admin@admin.com",
    "password": "admin1234"
*/