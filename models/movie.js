const mongoose = require('../config/db')
const movieScema = new mongoose.Schema({
    movieName: String,
    description: String,
    rate: Number,
    type: String,
    language: String,
    movieposter : String
})

const movieModel = mongoose.model("movies", movieScema);

module.exports = movieModel;

