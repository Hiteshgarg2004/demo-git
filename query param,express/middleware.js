const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.post("/sum", function (req, res) {
    const a = parseFloat(req.body.a);
    const b = parseFloat(req.body.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid numbers" });
    }

    res.json({ answer: a + b });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
