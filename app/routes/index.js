const apiRouter = require('express').Router()
const googleRouter = require('./googlePlaces')
const mongoRouter = require('./db')

apiRouter.use('/places', googleRouter)
apiRouter.use('/mongo', mongoRouter)

module.exports = apiRouter
