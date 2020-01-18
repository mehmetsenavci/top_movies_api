const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        require: true
    },
    releaseDate: {
        type: Date,
        required: false
    }
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;