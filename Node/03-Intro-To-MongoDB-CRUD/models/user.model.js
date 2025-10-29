const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: [3, 'Password must be at least 3 characters long'],
        maxLength: [15, 'Password cannot exceed 15 characters'],
        select: false,
    }
})

userSchema.pre('save', function (next) {
    console.log(JSON.stringify(this));
    next();
})

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;