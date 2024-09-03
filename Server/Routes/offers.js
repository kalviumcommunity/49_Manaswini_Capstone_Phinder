const express = require('express');
const router = express.Router();
const Offer = require('../Schema/offersSchema');

//bodyParser.json() middleware will parse the JSON data and make it available as a JavaScript object in req.body
const bodyParser = require("body-parser");
router.use(bodyParser.json());

// GET all offers
router.get('/offers', async (req, res) => {
    try {
        const offers = await Offer.find();
        res.json(offers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;