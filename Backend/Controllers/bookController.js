const Book = require('../models/Book');

// At the top of bookController.js, after your imports
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

exports.getAllBooks = async (req, res) => {
    try {
        const { title, authors, genre } = req.query;
        console.log("Received query parameters:", req.query);

        let filter = {};

        if (title) filter.title = new RegExp(title, 'i');
        if (title) filter.title = new RegExp(escapeRegExp(title), 'i');
        if (authors) filter.authors = new RegExp(authors, 'i');
        if (genre) filter.genre = new RegExp(genre, 'i');

        console.log("Constructed filter:", filter);

        const books = await Book.find(filter);
        res.status(200).json(books);
    } catch (error) {
        console.error("Error retrieving books:", error);
        res.status(500).json({ message: "Error retrieving books" });
    }
};

exports.getBookById = async (req, res) => {
    try {
        console.log("Fetching book with bookID:", req.params.id);
        const book = await Book.findOne({ bookID: Number(req.params.id) });

        if (!book) return res.status(404).json({ message: "Book not found" });
        
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
        if (!updatedBook) return res.status(404).json({ message: "Book not found" });

        console.log("Updated book:", updatedBook);
        res.status(200).json(updatedBook);
    } catch (error) {
        console.error("Error updating book:", error);
        res.status(500).json({ message: "Error updating book" });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found" });

        console.log("Deleted book with ID:", req.params.id);
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).json({ message: "Error deleting book" });
    }
};

exports.getBookByObjectId = async (req, res) => {
    try {
        console.log("Fetching book with ObjectID:", req.params.id);
        const book = await Book.findById(req.params.id);

        if (!book) return res.status(404).json({ message: "Book not found" });
        
        res.status(200).json(book);
    } catch (error) {
        console.error("Error in getBookByObjectId:", error);
        res.status(500).json({ message: "Error retrieving book" });
    }
};

exports.searchBooks = async (req, res) => {
    try {
        const { title, objectId } = req.query;
        let filter = {};

        function escapeRegExp(string) {
            return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }

        if (title) {
            filter.title = new RegExp(escapeRegExp(title), 'i');
        } else if (objectId) {
            filter._id = objectId;
        }

        const books = await Book.find(filter);
        res.status(200).json(books);
    } catch (error) {
        console.error("Error searching books:", error);
        res.status(500).json({ message: "Error searching books" });
    }
};
