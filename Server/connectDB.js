const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = connectDB
  