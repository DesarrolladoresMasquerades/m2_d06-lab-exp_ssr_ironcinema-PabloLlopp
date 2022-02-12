const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    itle: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;