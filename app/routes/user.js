const User = require("../models/user")
const apiRouter = require('express').Router()

apiRouter.post('/login', async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await User.findOne({ username }).select('+password')

    if (!user) {
      res.json({ success: false, error: "Username or Password is incorrect" })
    } else if (!(await user.passwordMatch(password, user.password))) {
      res.json({ success: false, error: "Username or Password is incorrect" })
    } else {
      res.json({ success: true, userId: user._id, error: null })
    }
  } catch(err) {
    console.error('err is', err)
  }
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
      return res.json({ success: true, error: null, userId: newUser._id })
    }

    return res.json({ success: false, error: "User cannot be created at this time" })

  } catch(err) {
    console.error('ooops', err)
  }
})

module.exports = apiRouter
