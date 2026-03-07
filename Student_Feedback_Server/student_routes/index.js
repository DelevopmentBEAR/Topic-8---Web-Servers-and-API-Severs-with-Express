const express = require('express')
const router = express.Router() // Figures out what code to run is response to a request
// typically based on the URL, and the method e.g. GET, POST, ....

// responds to GET request to the hope page '/'
// req = Request, res = Response, next (passes request onto something else)
router.get('/', function(req, res, next) {
    // Name of handlebars file - name of a template, optional object with data for template
    res.render('index', {
        title: 'Feedback Application',
        author: 'Berit',
        timePageLoadedAt: new Date()
    })
}) 

// Connects to student feedback form web page
router.get('/feedback-form', function(req, res, next) {
    res.render('student_feedback_form')
})

// Returns the router object to whatever else needs this file
// NEEDS to be at end of our file
module.exports = router