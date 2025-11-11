const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://hsangwan2002:Samay%40229@cluster0.18c099y.mongodb.net/")
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Error while connecting to MongoDB", err);
    }
}

module.exports = {
    connectToDB
};