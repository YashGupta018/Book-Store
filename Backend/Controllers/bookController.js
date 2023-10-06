const Book = require('../Models/book');

exports.getAllBooks = async (req, res) => {
    try {   
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving books" });
    }
};

// exports.getBookById = async (req, res) => {
//     try {
//         const book = await Book.findById(req.params.id);
//         if (!book) {
//             return res.status(404).json({ message: "Book not found" });
//         }
//         res.status(200).json(book);
//     } catch (error) {
//         res.status(500).json({ message: "Error retrieving book" });
//     }
// };

// exports.getBookById = async (req, res) => {
//     try {
//         console.log("Fetching book with ID:", req.params.id);  // Log the received ID

//         const book = await Book.findById(req.params.id);
        
//         console.log("Fetched book:", book);  // Log the retrieved book

//         if (!book) {
//             return res.status(404).json({ message: "Book not found" });
//         }
//         res.status(200).json(book);
//     } catch (error) {
//         console.error("Error in getBookById:", error);  // Log any errors
//         res.status(500).json({ message: "Error retrieving book" });
//     }
// };

exports.getBookById = async (req, res) => {
    try {
        console.log("Fetching book with bookID:", req.params.id);  // Log the received bookID

        var book = await Book.findOne({ bookID: Number(req.params.id) }); // Use find with bookID
        
        console.log("Fetched book:", book);  // Log the retrieved book

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(book);
    } catch (error) {
        console.error("Error in getBookById:", error);  // Log any errors
        res.status(500).json({ message: "Error retrieving book" });
    }
};

// exports.getBookById = async (req, res) => {
//     try {
//         console.log("Requested bookID:", req.params.id);  // Log the bookID being requested
//         // const book = await Book.findOne({ bookID: Number(req.params.id) });
//         console.log("Fetched book:", book);  // Log the fetched result from the database
//         if (!book) {
//             return res.status(404).json({ message: "Book not found" });
//         }
//         res.status(200).json(book);
//     } catch (error) {
//         console.error("Error while fetching book:", error);  // Log the error for more details
//         res.status(500).json({ message: "Error retrieving book" });
//     }
// };

exports.addBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: "Error adding book" });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: "Error updating book" });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting book" });
    }
};
