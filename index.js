const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const port = 8000
const routes = require("./app/routes")

const app = express()

mongoose
  .connect('mongodb://mongo:27017/whereShouldIEat', { useNewUrlParser: true })
  .then(() => console.log('MongoDb connected'))
  .catch(err => console.log('yikes', err))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes)

app.listen(port, () => console.log('We are live on ' + port));
