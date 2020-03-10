const meal = require("../models/post")
const settings = require("../models/settings")
const apiRouter = require('express').Router()

apiRouter.get('/recentMeals', async (req, res) => {
  const { userId } = req.query

  try {
    const meals = await meal.find({ userId })
    res.json(meals)
  } catch (err) {
    console.error(err)
  }
})

apiRouter.post('/chosenMeal', async (req, res) => {
  const { name, id, userId } = req.body

  try {
    const newMeal = await meal.create({ name, id, userId })
    res.json(newMeal)
  } catch (err) {
    console.error(err)
  }
})

apiRouter.get('/settings', async (req, res) => {
  const { userId } = req.query
  try {
    const setting = await settings.findOne({ userId })
    res.json(setting)
  } catch (err) {
    console.error('ooops', err)
  }
})

apiRouter.put('/settings', async (req, res) => {
  const { distance, repeatRestaurants, userId } = req.body
  try {
    const setting = await settings.findOneAndUpdate({ userId }, { distance, repeatRestaurants }, { upsert: true })
    res.json(setting)
  } catch (err) {
    console.log('ooops', err)
  }
})

module.exports = apiRouter
