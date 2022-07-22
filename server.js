const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT || 8000
const TestModel = require('./models/schema')

//connect to database

const connectDB = async () =>{
  try {
        await mongoose.connect(process.env.DB_STRING, {useNewUrlParser: true})
      console.log(`Connected to database: ${mongoose.connection.name}`)
  } catch (err) {
         console.log('Failed to connect', err)
  }
}
connectDB();
//middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

//add a get request

app.get('/', async (request, response) => {

    try { 
         //Get data from DB - specific collection
         //After data is found, then render ejs And pass
         //the data so it can render on the page
         const content = await TestModel.find()
         console.log(content)
        response.render('index.ejs', {contentKey: content})

    } catch(error){
        response.status(500).send({message: error.message})

    }
})

//connect to server
      app.listen(process.env.PORT || PORT, () => {
        console.log(`Server is running on port`)
      })