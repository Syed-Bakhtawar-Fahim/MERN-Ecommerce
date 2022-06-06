const mongoose = require("mongoose");

// Database connection
const connectDatabase = () => {
    mongoose.connect(`mongodb+srv://mernEcommerceWeb:mernEcommerceWeb@mernecommerceweb.ulf43.mongodb.net/ecommerce?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Database connected successfully');
        })
}

module.exports = connectDatabase;

/*
MERN-Ecommerce
Cluster Name: MERN-Ecommerce

Username: MERN-Ecommerce
Password: MERN-Ecommerce
mongodb+srv://bakhtawar:bakhtawar@cluster0.3xft5.mongodb.net/notes?retryWrites=true&w=majority

mongodb+srv://MERN-Ecommerce:<password>@mern-ecommerce.ct2zr.mongodb.net/?retryWrites=true&w=majority
mongodb+srv://MERN-Ecommerce:MERN-Ecommerce@mern-ecommerce.ct2zr.mongodb.net/Ecommerce?retryWrites=true&w=majority

mongosh "mongodb+srv://mern-ecommerce.ct2zr.mongodb.net/myFirstDatabase" --apiVersion 1 --username MERN-Ecommerce



mernEcommerceWeb
mongodb+srv://mernEcommerceWeb:<password>@mernecommerceweb.ulf43.mongodb.net/?retryWrites=true&w=majority
*/