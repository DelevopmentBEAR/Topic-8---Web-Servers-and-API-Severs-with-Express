const express = require('express')
const router = express.Router()
const randomWyrQuestion = require('../model/wyr_questions')

router.get('/', function(req, res, next) {
    res.send('Placeholder for home page')
})

router.get('/wyr', function(req, res, next) {
    // const wyr = {
    //     'question': 'Live in a circle house or a triangle house?',
    //     'answer1': 'Circle house', 
    //     'answer2': 'Triangle house'
    // }

    // Calls function in wyr_questions.js
    const wyr = randomWyrQuestion()

    res.json(wyr)

})

module.exports = router