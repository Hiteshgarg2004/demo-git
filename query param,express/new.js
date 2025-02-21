const express = require("express");

const app = express();
let reqcount = 0; // Initialize request counter

// Middleware to count requests

function logwriter(req, res,next) {
    

    console.log("method is "+ req.method);
    console.log("host is "+ req.hostname);

    console.log("route is "+ req.url);
    console.log(new Date());
    next();
    
}

app.use(logwriter);
function reqincreaser(req, res, next) {
    reqcount += 1;
    req.name="HiteshGarg";
    console.log("Total number of requests =", reqcount);
    next();
}
function sumhandler (req, res) {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);

    console.log(req.name);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid numbers" });
    }

    res.json({ answer: a + b });
}
// Route for addition
app.get("/sum/:a/:b", reqincreaser, sumhandler);

// Route for multiplication
app.get("/multiply/:a/:b", reqincreaser, function (req, res) {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid numbers" });
    }

    res.json({ answer: a * b });
});

// Route for division
app.get("/divide/:a/:b", reqincreaser, function (req, res) {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid numbers" });
    }

    if (b === 0) {
        return res.status(400).json({ error: "Cannot divide by zero" });
    }

    res.json({ answer: a / b });
});

// Route for subtraction
app.get("/subtract/:a/:b", reqincreaser, function (req, res) {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid numbers" });
    }

    res.json({ answer: a - b });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
