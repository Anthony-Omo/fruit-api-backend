require('dotenv').config()
const app = require('./app')
const port = process.env.PORT
//const express = require("express")
//const app = express()

app.listen(port, () => {
    console.log(`Simple api listening on port ${port}`)
})


/* app.get('/', (req, res) => {
    res.send({"Welcome": "Hello World"})
})

app.get('/name', (req, res) => {
    res.send(req.query)
})

app.get('/param/:id', (req, res) => {
    res.send(req.params)
}) */

