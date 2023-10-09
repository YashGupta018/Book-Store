const Order = require('../models/Order');
const Cart = require('../models/Cart');
const Book = require('../models/Book');

exports.placeOrder = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.userId }).populate('books.book');

        console.log("Fetched cart for user:", req.user.userId);

        if (!cart || cart.books.length === 0) {
            console.log("Cart is empty for user:", req.user.userId);
            return res.status(400).json({ message: "Cart is empty" });
        }

        // calculating the total amount based on the prices of the books and their quantities
        let calculatedTotalAmount = 0;
        for (let item of cart.books) {
            console.log(`Book ID: ${item.book._id}, Price: ${item.book.price}, Quantity: ${item.quantity}`);

            if (typeof item.book.price !== "number" || typeof item.quantity !== "number") {
                console.error("Invalid book price or quantity encountered. Skipping this item.");
                continue; // skip this iteration and move to the next item
            }

            calculatedTotalAmount += item.book.price * item.quantity;
        }

        console.log(`Calculated amount for user ${req.user.userId}: ${calculatedTotalAmount}`);

        // round to 2 decimal places
        const roundedCalculatedTotalAmount = Math.round(calculatedTotalAmount * 100) / 100;
        const roundedProvidedAmount = Math.round(req.body.totalAmount * 100) / 100;

        // compare the rounded values
        if (roundedCalculatedTotalAmount !== roundedProvidedAmount) {
            console.log(`Amount mismatch for user ${req.user.userId}: Calculated: ${roundedCalculatedTotalAmount}, Received: ${roundedProvidedAmount}`);
            return res.status(400).json({ message: "Total amount mismatch" });
        }

        const order = new Order({
            user: req.user.userId,
            books: cart.books,
            totalAmount: req.body.totalAmount
        });
        await order.save();
        console.log("Order saved for user:", req.user.userId);

        cart.books = [];
        await cart.save();
        console.log("Cart cleared for user:", req.user.userId);
        res.status(200).json(order);
    } catch (error) {
        console.error("Error placing order:", error.message);
        res.status(500).json({ message: "Error placing order", error: error.message });
    }
};

exports.viewOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.userId }).populate('books.book');
        console.log(`Fetched orders for user ${req.user.userId}:`, orders);
        res.status(200).json(orders);
    } catch (error) {
        console.error("Error fetching user's orders:", error.message);
        res.status(500).json({ message: "Error fetching user's orders", error: error.message });
    }
};

exports.viewAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).populate('books.book');
        console.log("Fetched all orders:", orders);
        res.status(200).json(orders);
    } catch (error) {
        console.error("Error fetching all orders:", error.message);
        res.status(500).json({ message: "Error fetching all orders", error: error.message });
    }
};
