//How to run the program
const express = require('express')
const cors = require('cors')
const app = express()
const fruits = require("./routes/fruits")

app.use(cors())
app.use(express.json()) //When we recieve a body it will convert it to json before dealing with it

app.get('/', (req, res) => {
    res.send("Hello from the fruits api")
})


app.use('/fruits', fruits) //http://localhost:3000//fruits

module.exports = app