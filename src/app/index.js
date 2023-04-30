const express = require('express')
const app = express()

const indexRoutes = require('./routes/index.routes')

app.set('port', process.env.PORT || 8080)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(indexRoutes)

module.exports = { app }
