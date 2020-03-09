const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please include a username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please include a password"]
  },
})

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next()

  this.password = await bcrypt.hash(this.password, 12)

  next()
})

UserSchema.methods.passwordMatch = async (password, savedPassword) => {
  return awaitbcrypt.compare(password, savedPassword)
}

const User = mongoose.model('User', UserSchema)

module.exports = User
