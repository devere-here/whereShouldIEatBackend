const user = require("../models/user")
const apiRouter = require('express').Router()

apiRouter.get('/login', async (req, res) => {
  const { username, password } = req.body
  user.findOne({ username, password })
    .then(user => res.json({ success: !!user, error: null }))
    .catch(err => console.log('ooops', err))
})

apiRouter.post('/signup', async (req, res) => {
  const { username, password } = req.body
  user.findOne({ username })
    .then(user => {
      if (user) {
        return res.json({ success: false, error: "username already exists" })
      }

      user.create({ username, password })
        .then(newUser => {
          if (newUser) {
            return res.json({ success: true, error: null })
          }

          return res.json({ success: false, error: "User cannot be created at this time" })
        })
        .catch(err => console.log('ooops', err))
    })
    .catch(err => console.log('ooops', err))

  user.create({ restaurant, type })
    .then(newMeal => res.json(newMeal))
    .catch(err => console.log('ooops', err))
})

module.exports = apiRouter
