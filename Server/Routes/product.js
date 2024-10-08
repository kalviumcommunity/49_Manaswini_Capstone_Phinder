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
// router.post('/smartphone', async (req, res) => {
//     try {
//         const smartphone = new Smartphone(req.body);
//         const savedSmartphone = await smartphone.save();
//         res.status(201).json(savedSmartphone);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });


//Updating the product - will be implemented late 
// router.put('/smartphone/:id', async (req, res) => {
//     try {
//         const updatedSmartphone = await Smartphone.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedSmartphone) return res.status(404).json({ message: "Smartphone not found" });
//         res.json(updatedSmartphone);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

module.exports = router;

