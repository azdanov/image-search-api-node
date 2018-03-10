/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const validator = require('validator');

const { Schema } = mongoose;

const ImageSchema = new Schema({
  url: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    validate: {
      validator(url) {
        return validator.isURL(url);
      },
      message: '{VALUE} is not a valid url.',
    },
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Image', ImageSchema);
