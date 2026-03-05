const express = require('express')

const router = express.Router()

router.get('/', function(req, res, next) {
    console.log('A request is made')
    res.render('home')
})

router.get('/calculate', function(req, res, next) {
    console.log('Calcuating...')
    // How to get the data from the request?
    const formData = req.query
    console.log(formData)
    // formData is an object e.g. {height: '6'}
    const height = Number(formData.height) 
    const weight = Number(formData.weight)
    // You could definately do validation here

    // Math
    // Correct the math here!
    const bmiResult = height * 2 / weight
    res.render('results',{bmi: bmiResult} )
})

// last line of the file
module.exports = router