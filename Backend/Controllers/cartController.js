const Cart = require('../models/Cart');
const Book = require('../models/Book');

// adding books to cart
// exports.addToCart = async (req, res) => {
//     try {
//         let cart = await Cart.findOne({ user: req.user.userId });
//         if (!cart) {
//             cart = new Cart({ user: req.user.userId });
//         }

//         const { bookId, quantity } = req.body;

//         // check if book exists
//         const bookExists = await Book.findById(bookId);
//         if (!bookExists) {
//             return res.status(404).json({ message: "Book not found" });
//         }

//         const bookItem = cart.books.find(item => item.book.toString() === bookId);
//         if (bookItem) {
//             bookItem.quantity += quantity;
//         } else {
//             cart.books.push({ book: bookId, quantity });
//         }

//         await cart.save();
//         res.status(200).json(cart);
//     } catch (error) {
//         res.status(500).json({ message: "Error adding to cart", error: error.message });
//     }
// };

exports.addToCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({ user: req.user.userId });
        if (!cart) {
            cart = new Cart({ user: req.user.userId });
        }

        const { bookId, quantity } = req.body;

        // check if book exists using ObjectID
        const bookExists = await Book.findById(bookId);
        if (!bookExists) {
            return res.status(404).json({ message: "Book not found" });
        }

        const bookItem = cart.books.find(item => item.book.toString() === bookId);
        if (bookItem) {
            bookItem.quantity += quantity;
        } else {
            cart.books.push({ book: bookId, quantity });
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: "Error adding to cart", error: error.message });
    }
};

// check my cart
exports.viewCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.userId }).populate('books.book');
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: "Error fetching cart", error: error.message });
    }
};

// remove a book from my cart
exports.removeFromCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.userId });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        const { bookId } = req.body;
        const bookIndex = cart.books.findIndex(item => item.book.toString() === bookId);
        if (bookIndex === -1) {
            return res.status(404).json({ message: "Book not found in cart" });
        }

        cart.books.splice(bookIndex, 1);
        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: "Error removing book from cart", error: error.message });
    }
};

// clear cart
exports.clearCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.userId });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        cart.books = [];
        await cart.save();
        res.status(200).json({ message: "Cart cleared successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error clearing cart", error: error.message });
    }
};
