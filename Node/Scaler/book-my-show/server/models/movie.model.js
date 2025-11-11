const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    releaseDate: {
        type: Date,
        required: true,
    },
    language: {
        type: [String],
        enum: ["English", "Hindi"],
        required: true,
    },
    poster: {
        type: String,
        required: true,
    },
    genre: {
        type: [String],
        enum: ["Action", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Thriller", "Western"],
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

const movieModel = mongoose.model('movies', movieSchema);

module.exports = movieModel;