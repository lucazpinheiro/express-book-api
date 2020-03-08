const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  language: {
    type: String,
  },
  publicationDate: {
    year: {
      type: Number,
      required: true,
    },
    month: {
      type: Number,
    },
  },
});

module.exports = mongoose.model('Books', booksSchema);
