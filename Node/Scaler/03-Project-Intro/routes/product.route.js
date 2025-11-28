const router = require('express').Router();
const { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById } = require('../controllers/product.controller');

router.post('/', createProduct)
    .get('/', getAllProducts)
    .get('/:id', getProductById)
    .put('/:id', updateProductById)
    .delete('/:id', deleteProductById);

module.exports = router;