const express = require("express");


function calculatesum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}

const app = express();
//  req = request and res result sent
app.get("/", function (req, res) {  // Fixed syntax
    const n = parseInt(req.query.n); // Convert string to number

    if (isNaN(n) || n < 0) { // Handle invalid input
        return res.status(400).send("Invalid input, please enter a positive number.");
    }

    const ans = calculatesum(n);
    res.send("Hi there ans is "+ ans.toString());
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
