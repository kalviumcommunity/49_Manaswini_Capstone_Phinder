require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Connecting the dbConnect.js file 
const connectDB = require('./connectDB');

// Middleware for parsing JSON request body
app.use(express.json());

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