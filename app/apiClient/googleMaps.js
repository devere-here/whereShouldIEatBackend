const { MAPS_API_KEY } = require("../../constants")

const googleMapsClient = require('@google/maps').createClient({
  key: MAPS_API_KEY,
  Promise: Promise
});

module.exports = googleMapsClient
