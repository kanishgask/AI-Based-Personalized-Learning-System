const express = require("express");
const cors = require("cors");
const { getRecommendations } = require("./recommender");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/recommend", (req, res) => {
    const { level, topic } = req.body;

    const result = getRecommendations(level, topic);
    res.json(result);
});

app.listen(5000, () => console.log("Server running on port 5000"));
