const app = require("./app");
const connectDatabase = require("./config/database");
// const dotenv = require("dotenv");
require('dotenv').config();

// dotenv.config({path: "backend/config/.env"});

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error ${err.message}`);
    console.log(`Shutting down the Server due to uncaughtException`);
    process.exit(1)
})

const PORT = process.env.PORT || 4000;

// Connecting the database
connectDatabase();

app.get('/', (req, res) => {
    res.send('Hi I am a hello world Server program')
})
app.get('/home', (req, res) => {
    res.send('Hello Viewer! Here is your home page')
})
const server = app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
// const server = app.listen(process.env.PORT, () => {
//     console.log(`Server is working on http://localhost:${process.env.PORT}`);
// });

// Undhandled Promise rejection error 
process.on("unhandledRejection", (err) => {
    console.log(`Error ${err.message}`);
    console.log(`Shutting down the Server due to unhandledRejection`);

    server.close(() => {
        process.exit(1)
    })
})

/* This is Uncaught Exception 
console.log(youtube)
In erver.js I handled it
// const server = app.listen(process.env.PORT, ()=>{
//     console.log(`server is running on port https/ ${process.env.PORT}`);
// })
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });
    */