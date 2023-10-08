const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    authors: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    price: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    average_rating: {
        type: String
    },
    ratings_count: {
        type: String
    },
    text_reviews_count: {
        type: String
    },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
