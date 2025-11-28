const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isInStock: {
        type: Boolean,
        default: true
    },
    category: {
        type: String,
        default: "General"
    }
}, { timestamps: true });

// Model is a wrapper for the schema, it is used to create and read documents from the underlying MongoDB database
const Product = mongoose.model('Product', productSchema);

module.exports = Product;