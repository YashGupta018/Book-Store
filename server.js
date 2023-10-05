const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const bookRoutes = require('./routes/bookRoutes');


// this is to parse the incoming request 
app.use(bodyParser.json());

app.use('/api/books', bookRoutes);

app.get('/', (req, res) => {
    res.send('Online Bookstore API');
});

const CONNECTION_URL = 'mongodb+srv://yashgupta:Etajlk3AJxhGyIlt@cluster0.9zczcjs.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB Atlas');
        app.listen(PORT, (err) => {
            if (err) console.log("Error in server setup");
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Failed to connect to MongoDB Atlas:", error);
    });

// error handling for unhandled promise
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Unhandled Promise Rejection");
    process.exit(1);
});
