require('dotenv-safe').config()
const express = require('express')

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.static('dist'))
app.use(function (req, res) {
  res.sendFile(`${__dirname}/index.html`)
})

app.listen(PORT)
