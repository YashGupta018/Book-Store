const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Import the user controller
const { authenticate, isAdmin } = require('../middlewares/auth'); // Import both middlewares

// user registration (auth. not available)
router.post('/register', userController.register);

// user login (auth. not available)
router.post('/login', userController.login);

// protected route fetching user profile
router.get('/profile', authenticate, userController.getProfile);

// user logout JWT token removal from frontend
router.post('/logout', authenticate, userController.logout);

// route for admin to get all users
router.get('/all', authenticate, isAdmin, userController.getAllUsers);

// admin can delete any user
router.delete('/:id', authenticate, isAdmin, userController.deleteUser);

// admin can update user role 
router.put('/:id/role', authenticate, isAdmin, userController.updateUserRole);

module.exports = router;
