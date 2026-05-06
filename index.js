const app = require('./app')
//const express = require("express")
//const app = express()
const port = 3000

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

