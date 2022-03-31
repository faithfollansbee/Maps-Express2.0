const mongoose = require('mongoose')

const iconSchema = new mongoose.Schema({
  emoji: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Place',
    required: true
  }
  }, {
  timestamps: true
  })

module.exports = mongoose.model('Icon', iconSchema)
