const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const PORT = process.env.PORT || 8000

//connect to database

let db,
     dbConnectionString = process.env.DB_STRING,
     dbName = 'sample_mflix',
     collection

     MongoClient.connect(dbConnectionString)
      .then(client => {
        console.log(`Connected to Database`)
         db = client.db(dbName)
         collection = db.collection('movies')
      })
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