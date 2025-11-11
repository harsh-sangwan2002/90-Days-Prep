const mongoose = require('mongoose');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: function () {
            return emailValidator.validate(this.email);
        }
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'Minimum length of password must be 8'],
    },
    confirmPassword: {
        type: String,
        required: true,
        minLength: [8, 'Minimum length of password must be 8'],
        validate: function () {
            return this.confirmPassword === this.password;
        }
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'restaurantOwner', 'deliveryBoy'],
        default: 'user',
    },
    profileImage: {
        type: String,
        default: 'img/users/default.jpeg'
    }
})

// pre hook - runs before saving in db
userSchema.pre('save', async function (next) {
    console.log("Before saving in db");
    this.confirmPassword = undefined;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

// // post hook - runs after saving in db
// userSchema.post('save', function (doc, next) {
//     console.log("After saving in db", doc);
//     next();
// })
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;