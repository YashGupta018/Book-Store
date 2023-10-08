const Book = require('../models/Book');

exports.getAllBooks = async (req, res) => {
    try {
        // extracting query parameters
        const { title, author, genre } = req.query;

        console.log("Received query parameters:", req.query);

        // filtering data (title, authors, genere)
        let filter = {};

        if (title) {
            filter.title = new RegExp(title, 'i'); // case insensitive
        }

        if (author) {
            filter.authors = new RegExp(authors, 'i');
        }

        if (genre) {
            filter.genre = new RegExp(genre, 'i');
        }

        console.log("Constructed filter:", filter);

        const books = await Book.find(filter);
        console.log("Fetched books:", books);
        res.status(200).json(books);
    } catch (error) {
        console.error("Error retrieving books:", error);
        res.status(500).json({ message: "Error retrieving books" });
    }
};

exports.getBookById = async (req, res) => {
    try {
        console.log("Fetching book with bookID:", req.params.id);

        var book = await Book.findOne({ bookID: Number(req.params.id) }); // using find with bookID
        
        console.log("Fetched book:", book);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(book);
    } catch (error) {
        console.error("Error in getBookById:", error);
        res.status(500).json({ message: "Error retrieving book" });
    }
};

exports.addBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        console.log("Added book:", newBook);
        res.status(201).json(newBook);
    } catch (error) {
        console.error("Error adding book:", error);
        res.status(500).json({ message: error.message });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log("Updated book:", updatedBook);
        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        console.error("Error updating book:", error);
        res.status(500).json({ message: "Error updating book" });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        console.log("Deleted book with ID:", req.params.id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).json({ message: "Error deleting book" });
    }
};
