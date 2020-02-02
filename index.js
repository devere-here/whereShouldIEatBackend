const express = require('express')
const bodyParser = require("body-parser")
const port = 8000
const routes = require("./app/routes")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes)

app.listen(port, () => console.log('We are live on ' + port));
