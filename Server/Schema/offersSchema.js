const mongoose = require("mongoose");
const offerSchema = new mongoose.Schema({
    name:{
        type: String
    },
    picture: {
        type: String
    },
    link: {
        type: String
    },
    app: {
        type: String
    },
    date: {
        type: String
    }
});

module.exports = mongoose.model("offer", offerSchema);