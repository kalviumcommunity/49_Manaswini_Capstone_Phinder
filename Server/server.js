require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const productRouter = require("./Routes/product.js")
const userRouter = require("./Routes/user.js");
const reviewRouter = require("./Routes/review.js");
const offerRouter = require("./Routes/offers.js");

// Connecting the dbConnect.js file 
const connectDB = require('./connectDB');

// Middleware for parsing JSON request body
app.use(express.json());

//bodyParser.json() middleware will parse the JSON data and make it available as a JavaScript object in req.body
const bodyParser = require("body-parser");
// Applying bodyParser.json() globally
app.use(bodyParser.json());

//Middleware to set routers
app.use("/api", productRouter);
app.use("/api", userRouter);
app.use("/api", reviewRouter);
app.use("/api", offerRouter);

//ping-pong req
app.get("/ping", (req, res) => {
    res.json({"message": "pong"});
});

connectDB()
  .then(() => {
    console.log("Connected to MongoDB");

    // If connecting is successful, then we do app.listen
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

module.exports = app;