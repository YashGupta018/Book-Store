const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'your_default_secret';

// authenticate middleware for verifying (JWT token)
const authenticate = (req, res, next) => {
    console.log("Inside authenticate middleware");

    const tokenHeader = req.header('Authorization');
    if (!tokenHeader) {
        console.log("No Authorization header provided");
        return res.status(401).send('Access Denied. No Authorization header provided.');
    }

    const token = tokenHeader.replace('Bearer ', '');
    if (!token) {
        console.log("No token provided after parsing the Authorization header");
        return res.status(401).send('Access Denied. No token provided.');
    }

    console.log("Token to verify:", token);
    console.log("Using JWT_SECRET:", JWT_SECRET);

    try {
        const verified = jwt.verify(token, JWT_SECRET);
        req.user = verified;
        console.log("Token verified successfully");
        next();
    } catch (err) {
        console.log("Invalid token error:", err.message);
        res.status(400).send('Invalid Token');
    }
};

// middleware to check if a user is an admin
const isAdmin = (req, res, next) => {
    console.log("Inside isAdmin middleware");
    if (req.user && req.user.isAdmin) {
        console.log("User is an admin");
        next();
    } else {
        console.log("User is not an admin. Access denied.");
        res.status(403).json({ message: "Access denied. Admin only." });
    }
};

module.exports = { authenticate, isAdmin };
