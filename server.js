const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse the incoming request body
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Online Bookstore API');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
