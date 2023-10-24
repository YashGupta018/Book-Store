const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const orderController = require('../controllers/orderController');
const userController = require('../controllers/userController');
const { authenticate, isAdmin } = require('../middlewares/auth'); 

// book related routes
router.post('/books', authenticate, isAdmin, bookController.addBook); 
router.put('/books/:id', authenticate, isAdmin, bookController.updateBook); 
router.delete('/books/:id', authenticate, isAdmin, bookController.deleteBook); 

// order related route
router.get('/orders/all', authenticate, isAdmin, orderController.viewAllOrders); 

// user related routes
router.get('/users/all', authenticate, isAdmin, userController.getAllUsers); 
router.delete('/users/:id', authenticate, isAdmin, userController.deleteUser); 
router.put('/users/:id/role', authenticate, isAdmin, userController.updateUserRole); 

module.exports = router;
