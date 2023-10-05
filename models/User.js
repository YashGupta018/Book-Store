const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {  // hashed before storing
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    // we can add any field like, profilePic, address, etc.
});

const User = mongoose.model('User', userSchema);

module.exports = User;
