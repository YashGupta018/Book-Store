const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticate, isAdmin } = require('../middlewares/auth');

router.get('/search', userController.searchUser);

// user registration
router.post('/register', userController.register);

// user login
router.post('/login', userController.login);

// fetch user profile
router.get('/profile', authenticate, userController.getProfile);

// logout (JWT token removal - frontend)
// router.post('/logout', authenticate, userController.logout);

// admin routes to manage users
router.get('/all', authenticate, isAdmin, userController.getAllUsers);
router.delete('/delete/:id', authenticate, isAdmin, userController.deleteUser);
router.put('/role/:id', authenticate, isAdmin, userController.updateUserRole);

// endpoint to verify token validity
router.get('/verifyToken', authenticate, (req, res) => {
    res.json({ 
        isAuthenticated: true, 
        isAdmin: req.user.isAdmin
    });
});

module.exports = router;
   