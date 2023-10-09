const Order = require('../models/Order');
const Cart = require('../models/Cart');

exports.placeOrder = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.userId });
        if (!cart || cart.books.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }
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

exports.viewOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.userId }).populate('books.book');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user's orders", error: error.message });
    }
};

exports.viewAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).populate('books.book');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching all orders", error: error.message });
    }
};