const Product = require('../models/product.model');

// Create a new product
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            message: "Product created successfully",
            product
        });
    } catch (err) {
        res.status(500).json({
            error: " Internal Server Error"
        })
    }
}

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({
            message: "Products fetched successfully",
            products
        });
    } catch (err) {
        res.status(500).json({
            error: " Internal Server Error"
        })
    }
}

// Get a product by ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                error: "Product not found"
            });
        }
        res.status(200).json({
            message: "Product fetched successfully",
            product
        });
    } catch (err) {
        res.status(500).json({
            error: " Internal Server Error"
        })
    }
}

// Update a product by ID
const updateProductById = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' });
        if (!product) {
            return res.status(404).json({
                error: "Product not found"
            });
        }
        res.status(200).json({
            message: "Product updated successfully",
            product
        });
    } catch (err) {
        res.status(500).json({
            error: " Internal Server Error"
        })
    }
}

// Delete a product by ID
const deleteProductById = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({
                error: "Product not found"
            });
        }
        res.status(200).json({
            message: "Product deleted successfully"
        });
    } catch (err) {
        res.status(500).json({
            error: " Internal Server Error"
        })
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById
};