const mongoose = require('mongoose')

const settingsSchema = new mongoose.Schema({
  distance: Number,
  repeatRestaurants: Boolean,
  userId: String,
})

const Settings = mongoose.model('Settings', settingsSchema)

module.exports = Settings
