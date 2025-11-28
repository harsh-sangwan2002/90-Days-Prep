const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://hsangwan2002:Samay%40229@cluster0.18c099y.mongodb.net/');
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};



module.exports = connectDB;