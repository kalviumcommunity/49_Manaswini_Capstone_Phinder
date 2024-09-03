const express = require('express');
const router = express.Router();
const User = require('../Schema/userSchema');

//bodyParser.json() middleware will parse the JSON data and make it available as a JavaScript object in req.body
const bodyParser = require("body-parser");
router.use(bodyParser.json());

// GET all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;