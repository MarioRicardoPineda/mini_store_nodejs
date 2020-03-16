const express = require('express')
const app = express()
const colors = require('colors')
const { PORT } = require('./config')
const { HomeRouter, ProductsRoutes, DescRoutes} = require('./routes')
const { NotFound } = require('./middlewares')

app.use(express.static('./assets'))
app.use(express.json())

app.use('/', HomeRouter)
app.use('/', ProductsRoutes)
app.use('/', DescRoutes)
app.use(NotFound)

app.listen(PORT, () => {
    console.log(`server on port ${PORT}`.brightYellow)
})