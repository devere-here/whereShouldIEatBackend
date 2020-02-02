const axios = require("axios");
const get = require("lodash/get");
const apiRouter = require('express').Router();
const { googleMapsUrl, MAPS_API_KEY } = require('../../constants');

apiRouter.post('/placesNearby', async (req, res) => {
  try {
    const { latitude, longitude, radius } = req.body
    const response = await axios.get(`${googleMapsUrl}/place/nearbysearch/json?key=${MAPS_API_KEY}&location=${latitude},${longitude}&radius=${radius}&keyword=restaurant`)

    res.json(get(response, ['data', 'results']))
  } catch (err) {
    res.json(err)
  }
})

module.exports = apiRouter;
