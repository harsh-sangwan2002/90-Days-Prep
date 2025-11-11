const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: [3, 'Password must be at least 3 characters long'],
        maxLength: [20, 'Password cannot exceed 20 characters'],
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
})

userSchema.pre('save', async function (next) {
    const user = this;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    next();
});

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;