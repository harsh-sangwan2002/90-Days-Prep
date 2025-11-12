const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    fromWallet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wallet',
    },
    toWallet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wallet',
    },
    amount: {
        type: Number,
        required: true,
        min: 0,
    },
    type: {
        type: String,
        enum: ['DEPOSIT', 'WITHDRAWAL', 'TRANSFER', 'REWARD'],
        required: true,
    },
    status: {
        type: String,
        enum: ['PENDING', 'SUCCESS', 'FAILED'],
        default: 'PENDING',
    },
    referenceId: {
        type: String,
        unique: true,
    },
    note: String,
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);