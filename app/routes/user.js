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
  User.findOne({ username })
    .then(user => {
      if (user) {
        return res.json({ success: false, error: "username already exists" })
      }

      User.create({ username, password })
        .then(newUser => {
          if (newUser) {
            return res.json({ success: true, error: null })
          }

          return res.json({ success: false, error: "User cannot be created at this time" })
        })
        .catch(err => console.log('ooops', err))
    })
    .catch(err => console.log('ooops', err))
})

module.exports = apiRouter
