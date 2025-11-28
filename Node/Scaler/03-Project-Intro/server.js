const express = require('express');

const app = express();
const connectDB = require('./config/db');
const productRouter = require('./routes/product.route');

app.use(express.json());

app.use('/api/products', productRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    connectDB();
});