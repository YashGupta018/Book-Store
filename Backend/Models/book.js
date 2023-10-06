const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookID: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    average_rating: {
        type: String
    },
    isbn: {
        type: String,
        unique: true
    },
    isbn13: {
        type: String,
        unique: true
    },
    language_code: {
        type: String
    },
    num_pages: {
        type: String
    },
    ratings_count: {
        type: Number
    },
    text_reviews_count: {
        type: Number
    },
    publication_date: {
        type: String
    },
    publisher: {
        type: String
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
