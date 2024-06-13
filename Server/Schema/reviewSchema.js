const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
    fullname:{
        type: String
    },
    email: {
        type: String
    },
    brand: {
        type: String
    },
    model: {
        type: String
    },
    review: {
        type: String
    }
});

module.exports = mongoose.model("review", reviewSchema);