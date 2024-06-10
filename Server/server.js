const express = require("express");
const app = express();
const port = process.env.PORT || 3000

// Middleware for parsing JSON request body
app.use(express.json());

//ping-pong req
app.get("/ping", (req, res) => {
    res.json({"message": "pong"});
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

