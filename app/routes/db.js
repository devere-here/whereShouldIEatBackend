const meal = require("../models/post")
const settings = require("../models/settings")
const apiRouter = require('express').Router()

apiRouter.get('/recentMeals', async (req, res) => {
  meal.find()
    .then(meals => res.json(meals))
    .catch(err => console.log('ooops', err))
})

apiRouter.post('/chosenMeal', async (req, res) => {
  const { name, id } = req.body

  meal.create({ name, id })
    .then(newMeal => res.json(newMeal))
    .catch(err => console.log('ooops', err))
})

apiRouter.get('/settings', async (req, res) => {
  settings.find()
    .then(settings => res.json(settings))
    .catch(err => console.log('ooops', err))
})

apiRouter.post('/settings', async (req, res) => {
  const { distance, repeatRestaurants } = req.body

  settings.create({ distance, repeatRestaurants })
    .then(settings => res.json(settings))
    .catch(err => console.log('ooops', err))
})

module.exports = apiRouter
