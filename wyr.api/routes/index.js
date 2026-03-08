const express = require('express')
const router = express.Router()

router.get('/wyr', function(req, res, next) {
    const wyr = {
        'question': 'Live in a circle house or a triangle house?',
        'answer1': 'Circle house', 
        'answer2': 'Traingle house'
    }

    res.json(wyr)

})

module.exports = router