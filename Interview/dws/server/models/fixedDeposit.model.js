const mongoose = require('mongoose');

const fixedDepositSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
        min: 1000,
    },
    interestRate: {
        type: Number,
        default: 6.5,
    },
    durationMonths: {
        type: Number,
        required: true,
    },
    maturityDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'CLOSED'],
        default: 'ACTIVE',
    },
}, { timestamps: true });

module.exports = mongoose.model('FixedDeposit', fixedDepositSchema);