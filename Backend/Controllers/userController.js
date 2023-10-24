const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { isAdmin } = require('../middlewares/auth');

const JWT_SECRET = process.env.JWT_SECRET || 'your_default_secret';

exports.searchUser = async (req, res) => {
    try {
        let query = {};
        if (req.query.name) {
            query.name = req.query.name;
        }
        if (req.query.email) {
            query.email = req.query.email;
        }

        const user = await User.findOne(query);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error searching for user:", error.message);
        res.status(500).json({ message: "Error searching for user", error: error.message });
    }
};

exports.register = async (req, res) => {
    console.log("Received registration request for email:", req.body.email);
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            console.log("User already exists with email:", email);
            return res.status(400).json({ message: "User already exists" });
        }

        user = new User({ name, email, password });
        await user.save();
        console.log("User registered successfully with email:", email);
        res.status(201).json({ success: true, message: "User registered successfully" });
    } catch (error) {
        console.error("Error registering user with email", req.body.email, "-", error.message);
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
};

exports.login = async (req, res) => {
    console.log("Received login request for email:", req.body.email);
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            console.log("No user found with email:", email);
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            console.log("Password mismatch for email:", email);
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const redirectPath = user.isAdmin ? '/admin' : '/user';
        const token = jwt.sign({ userId: user._id, name: user.name, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: '1h' });
        
        console.log("User logged in successfully with email:", email);
        res.json({ token, redirectPath });
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
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ 
            message: "Welcome to your profile!",
            user: user 
        });
    } catch (error) {
        console.error("Error fetching profile for user ID", req.user.userId, "-", error.message);
        res.status(500).json({ message: "Error fetching profile", error: error.message });
    }
};

// exports.getAllUsers = async (req, res) => {
//     console.log("Fetching all users...");
//     try {
//         const users = await User.find().select('-password');
//         if (!users || users.length === 0) {
//             console.log("No users found.");
//             return res.status(404).json({ message: "No users found" });
//         }

//         res.status(200).json(users);
//     } catch (error) {
//         console.error("Error fetching all users:", error.message);
//         res.status(500).json({ message: "Error fetching users", error: error.message });
//     }
// };

exports.getAllUsers = async (req, res) => {
    console.log("Fetching all users...");
    try {
        const users = await User.find().select('-password');
        if (!users || users.length === 0) {
            console.log("No users found.");
            return res.status(404).json({ message: "No users found" });
        }

        console.log("Fetched users:", users);  // Log the fetched users to verify the data
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching all users:", error.message);
        res.status(500).json({ message: "Error fetching users", error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    console.log("Attempting to delete user with ID:", req.params.id);
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            console.log("User not found with ID:", req.params.id);
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user with ID", req.params.id, "-", error.message);
        res.status(500).json({ message: "Error deleting user", error: error.message });
    }
};

exports.updateUserRole = async (req, res) => {
    console.log("Attempting to update user role with ID:", req.params.id);
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { isAdmin: req.body.isAdmin }, { new: true });
        if (!user) {
            console.log("User not found with ID:", req.params.id);
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error updating user role with ID", req.params.id, "-", error.message);
        res.status(500).json({ message: "Error updating user role", error: error.message });
    }
};

exports.verifyToken = (req, res) => {
    const token = req.header('Authorization') && req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        console.log("Token not found in headers");
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        res.status(200).json({ valid: true });
    } catch (error) {
        console.log("Error during token verification:", error);
        res.status(400).json({ message: "Invalid token." });
    }
};
