const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { authenticate, isAdmin } = require('../middlewares/auth');

// place an order
router.post('/place', authenticate, orderController.placeOrder);

// view user's orders
router.get('/', authenticate, orderController.viewOrders);

// admin to view all orders
router.get('/all', authenticate, isAdmin, orderController.viewAllOrders);

module.exports = router;
