const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  longName: {
    type: String,
    required: false
  },
  type: {
    type: String,
    required: true
  },
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  },
  emoji: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Place', placeSchema)
