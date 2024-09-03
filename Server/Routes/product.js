const express = require("express");
const router = express.Router();
const smartphone = require('../Schema/phoneSchema');

//Get all products
router.get("/products", async (req, res) => {
    try {
        const products = await smartphone.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }    
})

module.exports = router;

