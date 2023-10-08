const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    books: [{
        book: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book'
        },
        quantity: {
            type: Number,
            default: 1
        }
    }],
    orderDate: {
        type: Date,
        default: Date.now
    },
    totalAmount: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Order', orderSchema);
