const express = require('express')

const router = express.Router()

router.get('/', function(req, res, next) {
    console.log('A request is made')
    res.render('home')
})

// last line of the file
module.exports = router