// Importing Libraries
const express = require("express");
const cors = require("cors");
const errorMiddleWare = require("./middleware/error");


// Used App
const app = express();
app.use(express.json());
app.use(cors())

//Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute")
app.use("/api/v1", product);
app.use("/api/v1/", user)

//MiddleWare for Error
app.use(errorMiddleWare); 

//Export App
module.exports = app;

