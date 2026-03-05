const express = require('express')

const router = express.Router()

router.get('/', function(req, res, next) {
    res.render('home')
})

// last line of the file
module.exports = router