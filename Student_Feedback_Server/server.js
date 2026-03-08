// Imports express library to file
const express = require('express')
// Connects various paths together to the files in our folder
const path = require('path')
const bodyParser = require('body-parser')

// Connects specifically to index.js file
const indexRouter = require('./student_routes/index')

// Creates the web app server
const app = express()

// enable parsing of POST request form body
app.use(bodyParser.urlencoded({ extended: false }))

// serve static files, such as CSS
const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))

// Connects express library to 'views' folder and any files in that folder using 'path'
// AKA tells app where the views (HTML files or templates) are
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs') // Use handlebars to generate views

// All requests to the app will be passed to indexRouter, which will generate a response back
app.use('/', indexRouter) 

// start server running
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port', server.address().port)
})
