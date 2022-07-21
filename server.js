const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT || 8000

//connect to database

const connectDB =
//middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

//add a get request

app.get('/', async (request, response) => {

    try {
        response.render('index.ejs')

    } catch(error){
        response.status(500).send({message: error.message})

    }
})

//connect to server
      app.listen(process.env.PORT || PORT, () => {
        console.log(`Server is running on port`)
      })