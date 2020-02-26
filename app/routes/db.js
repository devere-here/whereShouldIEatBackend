const meal = require("../models/post")
const apiRouter = require('express').Router()

apiRouter.get('/recentMeals', async (req, res) => {
  meal.find()
    .then(meals => res.json(meals))
    .catch(err => console.log('ooops', err))
})

apiRouter.post('/chosenMeal', async (req, res) => {
  const { restaurant, type } = req.body

  meal.create({ restaurant, type })
    .then(newMeal => res.json(newMeal))
    .catch(err => console.log('ooops', err))
})

module.exports = apiRouter
