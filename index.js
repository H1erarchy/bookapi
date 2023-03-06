const express = require("express")
const mongoose = require (`mongoose`)
require(`dotenv`).config()

const Book = require ('../models/books.js')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    console.log('hello world')
  })
























const PORT = process.env.PORT || 8080;

app.listen (PORT, console.log (`listening on port ${PORT}`))