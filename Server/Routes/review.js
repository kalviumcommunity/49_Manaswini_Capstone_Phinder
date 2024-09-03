const express = require('express');
const router = express.Router();
const Review = require('../Schema/reviewSchema');

//bodyParser.json() middleware will parse the JSON data and make it available as a JavaScript object in req.body
const bodyParser = require("body-parser");
router.use(bodyParser.json());


// GET all reviews
router.get('/review', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;