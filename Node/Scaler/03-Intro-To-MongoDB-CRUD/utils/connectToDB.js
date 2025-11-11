const mongoose = require('mongoose');

const connectToDB = async () => {
    await mongoose.connect('mongodb+srv://hsangwan2002:Samay%40229@cluster0.18c099y.mongodb.net/');
    console.log("Connected to MongoDB successfully");
}

module.exports = connectToDB;