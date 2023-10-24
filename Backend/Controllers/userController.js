const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your_default_secret';

// Search for a user based on query params
exports.searchUser = async (req, res) => {
    try {
        let query = {};
        if (req.query.name) query.name = req.query.name;
        if (req.query.email) query.email = req.query.email;

        const user = await User.findOne(query);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error searching for user", error: error.message });
    }
};

// User registration
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });

        if (user) return res.status(400).json({ message: "User already exists" });

        user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ success: true, message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
};

// User login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ message: "Invalid email or password" });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ message: "Invalid email or password" });

        const token = jwt.sign({ userId: user._id, name: user.name, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, redirectPath: user.isAdmin ? '/admin' : '/user' });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
};

// Authentication middleware to verify the token
exports.authenticate = (req, res, next) => {
    const token = req.header('Authorization') && req.header('Authorization').replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: "Access denied. No token provided." });

    try {
        req.user = jwt.verify(token, JWT_SECRET);
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token." });
    }
};

// Fetch the profile of the authenticated user
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select('-password');
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching profile", error: error.message });
    }
};

// Fetch all users (excluding their password details)
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        if (!users || users.length === 0) return res.status(404).json({ message: "No users found" });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
    }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error: error.message });
    }
};

// Update user role by ID
exports.updateUserRole = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { isAdmin: req.body.isAdmin }, { new: true });
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error updating user role", error: error.message });
    }
};

// Verify if a token is valid
exports.verifyToken = (req, res) => {
    const token = req.header('Authorization') && req.header('Authorization').replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: "Access denied. No token provided." });

    try {
        jwt.verify(token, JWT_SECRET);
        res.status(200).json({ valid: true });
    } catch (error) {
        res.status(400).json({ message: "Invalid token." });
    }
};
