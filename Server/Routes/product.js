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

//Not required as of now but will see how to develop it later.
router.post('/smartphone', async (req, res) => {
    try {
        const smartphone = new Smartphone(req.body);
        const savedSmartphone = await smartphone.save();
        res.status(201).json(savedSmartphone);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;

