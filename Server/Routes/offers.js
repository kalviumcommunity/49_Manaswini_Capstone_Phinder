const express = require('express');
const router = express.Router();
const Offer = require('../Schema/offersSchema');

// GET all offers
router.get('/offers', async (req, res) => {
    try {
        const offers = await Offer.find();
        res.json(offers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Post a new offer(Not required as of now)
// router.post('/offer', async (req, res) => {
//     try {
//         const offer = new Offer(req.body);
//         const savedOffer = await offer.save();
//         res.status(201).json(savedOffer);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// PUT Request - Update an existing offer - will be implemented later
// router.put('/offer/:id', async (req, res) => {
//     try {
//         const updatedOffer = await Offer.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedOffer) return res.status(404).json({ message: "Offer not found" });
//         res.json(updatedOffer);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

module.exports = router;