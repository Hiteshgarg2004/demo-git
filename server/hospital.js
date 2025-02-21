const express = require("express");

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

const users = [
    {
        name: "John",
        kidneys: [{
            healthy: false
        }]
    }
];

app.get("/", function (req, res) {

    const johnkidneys = users[0].kidneys; // Get John's kidneys
    const numberofkidneys = johnkidneys.length; // Get the number of kidneys

    // Count how many kidneys are healthy
    let numberofh = 0;
    for (let i = 0; i < johnkidneys.length; i++) {
        if (johnkidneys[i].healthy) {
            numberofh = numberofh + 1;
        }
    }

    // Calculate the number of unhealthy kidneys
    const numberofunh = numberofkidneys - numberofh;

    res.json({
        numberofkidneys,
        numberofh,
        numberofunh
    });
});

app.post("/", function (req, res) {

    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy: ishealthy
    });
    
    res.json({
        msg: "done!"
    });
});

app.put("/", function (req, res) {
    // Mark all kidneys as healthy
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
});

app.delete("/", function (req, res) {
    // Remove unhealthy kidneys

    if(isthereanyunhealthy())
    {
        const newkidneys = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newkidneys.push({
                    healthy: true // Use a comma here instead of a semicolon
                });
            }
        }
        users[0].kidneys = newkidneys;
        res.json({ msg: "done!" });
    }
    else{
        res.status(411).json({ msg: "u have no bad kidneys" });
    }
    
});
function isthereanyunhealthy()
{
    let atleast=false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
           atleast=true;
        }
    }
    return atleast;
}
app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});
