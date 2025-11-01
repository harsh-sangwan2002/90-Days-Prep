const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://hsangwan2002:Samay%40229@cluster0.lfjolhe.mongodb.net/');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
}

module.exports = connectToDB;