//Require express
var express = require("express")
//Require path
var path = require("path")
//Load api routes
var api = require('./app/routing/apiRoutes')
//Load html routes
var html = require('./app/routing/htmlRoutes')
//Set up express app
var app = express()

//Save port to variable
var port = process.env.PORT || 8000

//Use middleware to parse data passed to array from survey
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Serve static files. Needed for html files to register
app.use(express.static('app/public'));

//Use api routes
app.use('/api', api)
//Use html routes
app.use('/', html)

//Start the server up with the listen function
app.listen(port, function() {
    console.log("App listening on port: " + port)
});
