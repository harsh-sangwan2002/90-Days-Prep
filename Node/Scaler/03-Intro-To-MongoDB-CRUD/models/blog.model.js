const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
        trim: true,
    },
    content: {
        type: String,
    }
}, { timestamps: true });

const blogModel = mongoose.model('blogs', blogSchema);
module.exports = blogModel;