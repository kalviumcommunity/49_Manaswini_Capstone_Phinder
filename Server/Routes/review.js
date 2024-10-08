const express = require('express');
const router = express.Router();
const Review = require('../Schema/reviewSchema');

// GET all reviews
router.get('/review', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Post a new review 
router.post('/review', async (req, res) => {
    try {
        const review = new Review(req.body);
        const savedReview = await review.save();
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT Request - Update an existing review
router.put('/review/:id', async (req, res) => {
    try {
        const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedReview) return res.status(404).json({ message: "Review not found" });
        res.json(updatedReview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;