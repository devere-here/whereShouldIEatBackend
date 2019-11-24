const apiRouter = require('express').Router();
const googleMapsClient = require('../apiClient/googleMaps')

apiRouter.post('/hello', (req, res) => {
  res.send({hello: 'world'})
});

apiRouter.get('/location', (req, res) => {
  googleMapsClient.geocode({address: '1600 Amphitheatre Parkway, Mountain View, CA'}).asPromise()
  .then((response) => {
    console.log(response.json.results);
    res.json(response)
  })
  .catch((err) => {
    res.json(err)
  });
})

apiRouter.post('/placesNearby', (req, res) => {
  const { location, radius } = req.body
  googleMapsClient.placesNearby({ location: location, radius: radius }).asPromise()
  .then((response) => {
    console.log(response.json.results);
    res.json(response)
  })
  .catch((err) => {
    console.log(err);
    res.json(err)
  });

})

module.exports = apiRouter;
