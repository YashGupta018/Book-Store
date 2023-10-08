const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// environment variable (JWT secret)
const JWT_SECRET = process.env.JWT_SECRET || 'your_default_secret';

exports.register = async (req, res) => {
    console.log("Received registration request for email:", req.body.email);

    try {
        const { name, email, password } = req.body;

        // check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            console.log("User already exists with email:", email);
            return res.status(400).json({ message: "User already exists" });
        }

        // creating user and password will be hashed by : pre-save hook
        user = new User({
            name,
            email,
            password
        });

        await user.save();
        console.log("User registered successfully with email:", email);
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error registering user with email", req.body.email, "-", error.message);
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
};

exports.login = async (req, res) => {
    console.log("Received login request for email:", req.body.email);

    try {
        const { email, password } = req.body;

        // find user
        const user = await User.findOne({ email });
        if (!user) {
            console.log("No user found with email:", email);
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // check password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            console.log("Password mismatch for email:", email);
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // create and send token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
        console.log("User logged in successfully with email:", email);
        res.json({ token });
    } catch (error) {
        console.error("Error during login for email", req.body.email, "-", error.message);
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
};

exports.logout = (req, res) => {
    console.log("Logout function in controller");
    res.json({ message: "Logged out successfully" });
};

exports.authenticate = (req, res, next) => {
    console.log("Authenticate middleware triggered.");

    const token = req.header('Authorization') && req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        console.log("Token not found in headers");
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    console.log("Token provided:", token);

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        console.log("Token verified successfully.");
        next();
    } catch (error) {
        console.log("Error during token verification:", error);
        res.status(400).json({ message: "Invalid token." });
    }
};

exports.getProfile = async (req, res) => {
    console.log("Fetching profile for user ID:", req.user.userId);

    try {
        const user = await User.findById(req.user.userId).select('-password');
        if (!user) {
            console.log("User not found for ID:", req.user.userId);
            throw new Error("User not found");
        }

        console.log("Successfully fetched profile for user ID:", req.user.userId);
        res.status(200).json({ 
            message: "Welcome to your profile!",
            user: user 
        });
    } catch (error) {
        console.error("Error fetching profile for user ID", req.user.userId, "-", error.message);
        res.status(500).json({ message: "Error fetching profile", error: error.message });
    }
};
