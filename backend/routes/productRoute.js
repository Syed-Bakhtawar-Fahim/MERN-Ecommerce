const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controller/productController");


const router = express.Router();

// Products API Used
router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails);

 

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
*/