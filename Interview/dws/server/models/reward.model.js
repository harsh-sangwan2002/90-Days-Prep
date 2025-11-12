const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    type: {
        type: String,
        enum: ['CASHBACK', 'REFERRAL', 'BONUS'],
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    description: String,
    redeemed: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('Reward', rewardSchema);
