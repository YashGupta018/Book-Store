const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const { authenticate } = require('../middlewares/auth');  // Assuming you have authentication middleware

// adding a book to my cart
router.post('/add', authenticate, cartController.addToCart);

// view my cart
router.get('/', authenticate, cartController.viewCart);

// remove a book from my cart
router.post('/remove', authenticate, cartController.removeFromCart);

// clear cart
router.post('/clear', authenticate, cartController.clearCart);

module.exports = router;
