require('dotenv').config();
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

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, GET');
  res.setHeader('Access-Control-Allow-headers', "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes)

app.listen(port, () => console.log('We are here on ' + port));
