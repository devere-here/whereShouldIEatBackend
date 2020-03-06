const apiRouter = require('express').Router()
const googleRouter = require('./googlePlaces')
const mongoRouter = require('./db')
const userRouter = require('./user')

apiRouter.use('/places', googleRouter)
apiRouter.use('/mongo', mongoRouter)
apiRouter.use('/user', userRouter)

module.exports = apiRouter
