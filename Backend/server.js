const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// importing routes
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cartRoutes = require('./routes/cartRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// API routes
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
    res.send('Online Bookstore API');
});

const CONNECTION_URL = 'mongodb+srv://yashgupta:Q9EoWPL03NBhZros@cluster0.mrvvkey.mongodb.net/book-store?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(PORT, (err) => {
        if (err) console.error("Error in server setup");
        console.log(`Server running on http://localhost:${PORT}`);
    });
})
.catch((error) => {
    console.error("Failed to connect to MongoDB Atlas:", error);
});

// handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
    console.error(`Error: ${err.message}`);
    console.log("Shutting down the server due to Unhandled Promise Rejection");
    process.exit(1);
});
