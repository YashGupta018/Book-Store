const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Import the user controller
const { authenticate } = require('../middlewares/auth');

// user registration (auth. not available)
router.post('/register', userController.register);

// user login (auth. not available)
router.post('/login', userController.login);

// protected route fetching user profile
router.get('/profile', authenticate, userController.getProfile);

// user logout JWT token removal from frontend
router.post('/logout', authenticate, userController.logout);

module.exports = router;
