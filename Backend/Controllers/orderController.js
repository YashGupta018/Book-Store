const Order = require('../models/Order');
const Cart = require('../models/Cart');
const Book = require('../models/Book');

// Place an order for the user
exports.placeOrder = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.userId }).populate('books.book');

        if (!cart || cart.books.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }

        // Calculate the total order amount
        let calculatedTotalAmount = 0;
        for (let item of cart.books) {
            if (typeof item.book.price === "number" && typeof item.quantity === "number") {
                calculatedTotalAmount += item.book.price * item.quantity;
            }
        }

        // Round to 2 decimal places for comparison
        const roundedCalculatedTotalAmount = Math.round(calculatedTotalAmount * 100) / 100;
        const roundedProvidedAmount = Math.round(req.body.totalAmount * 100) / 100;

        if (roundedCalculatedTotalAmount !== roundedProvidedAmount) {
            return res.status(400).json({ message: "Total amount mismatch" });
        }

        // Save the order and clear the cart
        const order = new Order({
            user: req.user.userId,
            books: cart.books,
            totalAmount: req.body.totalAmount
        });
        await order.save();

        cart.books = [];
        await cart.save();
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: "Error placing order", error: error.message });
    }
};

// Fetch user's orders
exports.viewOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.userId }).populate('books.book');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user's orders", error: error.message });
    }
};

// Fetch all orders
exports.viewAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).populate('books.book').populate('user');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching all orders", error: error.message });
    }
};
