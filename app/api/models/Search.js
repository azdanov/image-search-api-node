const mongoose = require('mongoose');

const { Schema } = mongoose;

const Search = new Schema({
  term: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Search', Search);
