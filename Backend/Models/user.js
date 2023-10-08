const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }],
    purchasedBooks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }]
});

// hashing the password before saving a new user
userSchema.pre('save', async function(next) {
    console.log('Pre-save hook triggered.');

    if (!this.isModified('password')) {
        console.log('Password not modified. Skipping hashing.');
        return next();
    }

    try {
        console.log('Hashing password.');
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        console.log('Password hashed successfully.');
        next();
    } catch (error) {
        console.error('Error during password hashing:', error);
        next(error);
    }
});

// checking if an entered password is correct
userSchema.methods.correctPassword = async function(enteredPassword, userPassword) {
    console.log('Checking if entered password is correct.');

    try {
        const isMatch = await bcrypt.compare(enteredPassword, userPassword);
        console.log('Password match result:', isMatch);
        return isMatch;
    } catch (error) {
        console.error('Error during password comparison:', error);
        throw error;
    }
};

const User = mongoose.model('User', userSchema);
console.log('User model defined.');

module.exports = User;
