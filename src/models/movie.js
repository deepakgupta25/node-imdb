const mongoose = require('mongoose');

const moviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  director: {
    type: String,
    required: true,
    trim: true
  },
  imdb_score: {
    type: Number,
    required: true
  },
  popularity: {
    type: Number,
    required: true
  },
  genre: [String]
});

const Movie = mongoose.model('Movie', moviewSchema)

module.exports = Movie;
