const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    show: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'shows',
        required: true,
    },
    transactionId: {
        type: String,
        required: true,
    },
    seats: {
        type: [String],
        required: true,
    },
}, { timestamps: true });

const bookingModel = mongoose.model('bookings', bookingSchema);

module.exports = bookingModel;