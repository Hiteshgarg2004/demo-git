const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/hitesh', function (req, res) {
  res.send('Hello from Hitesh');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
