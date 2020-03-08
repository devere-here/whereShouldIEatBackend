const jwt = require('jsonwebtoken')
const User = require("../models/user")
const apiRouter = require('express').Router()

apiRouter.post('/login', async (req, res) => {
  const { username, password } = req.body
  User.findOne({ username, password })
    .then(user => {
      let success = !!user
      const error = success ? null : "Sorry, we couldn't find a match"
      res.json({ success, error })
    })
    .catch(err => console.log('ooops', err))
})

apiRouter.post('/signup', async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await User.findOne({ username })
    if (user) {
      return res.json({ success: false, error: "username already exists" })
    }

    const newUser = await User.create({ username, password })
    if (newUser) {
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
      })
      return res.json({ success: true, error: null, token })
    }

    return res.json({ success: false, error: "User cannot be created at this time" })

  } catch(err) {
    console.error('ooops', err)
  }
})

module.exports = apiRouter
