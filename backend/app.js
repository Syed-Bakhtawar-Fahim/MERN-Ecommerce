// Importing Libraries
const express = require("express");
const cors = require("cors");
const errorMiddleWare = require("./middleware/error");
const cookieParser = require('cookie-parser');


// Used App
const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors())

//Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute")
const order = require("./routes/orderRoute")
app.use("/api/v1", product);
app.use("/api/v1/", user)
app.use("/api/v1", order)

//MiddleWare for Error
app.use(errorMiddleWare); 

//Export App
module.exports = app;

