const { Router } = require("express");
const express = require("express");
const { newOrder, getSingleOrder, myOrders, getAllOrders, updateOrder, deleteOrder } = require("../controller/orderController");
const { isAuthentication, authorizedRole} = require("../middleware/auth");
const router = express.Router();


router.route("/order/new").post(isAuthentication, newOrder)
router.route("/order/:id").get(isAuthentication, getSingleOrder)
router.route("/orders/me").get(isAuthentication, myOrders)
router.route("/admin/orders").get(isAuthentication, authorizedRole("admin"), getAllOrders)
router.route("/admin/order/:id")
.put(isAuthentication, authorizedRole("admin"), updateOrder)
.delete(isAuthentication, authorizedRole("admin"), deleteOrder)


module.exports = router;


/*
{
    "itemsPrice": 200,
    "taxPrice": 36,
    "shippingPrice": 1000,
    "totalPrice": 336,
    "orderItems": [
        {
            "product": "629e85d738e53812867ac4ff",
            "name": "UserWithtet",
            "price": 210000,
            "image": "sample Image",
            "Quantity": 1
        }
    ],
    "shippingInfo": {
        "address": "619 Los Angele",
        "city": "LA",
        "state": "Karachi",
        "country": "Pakistan",
        "pinCode": 4234234,
        "phoneNo": 12131234124
    },
    "paymentInfo": {
        "id": "sample paymentInfo",
        "status": "succeedeed"
    }
}
*/