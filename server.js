//HOW DO I PASS USER INFORMATION INTO ARRAYS IN FRIENDS.JS? CLICK HANDLERS? POST REQUESTS? SOMETHING TO DO WITH REQ.BODY
//I DONT ENTIRELY UNDERSTAND GET AND POST REQUESTS. GET IS TO GET INFORMATION FROM USER REQUEST (EX. QUESTIONAIRE ANSWERS)?
//POST IS TO SEND INFORMATION TO USER (EX. MATCHED FRIEND RESULTS)?
///HOW DO I REFERENCE THE OTHER TWO JS FILES INTO THE SERVER JS FILE?

// SOLVED: WHAT DO I DO AFTER STARTING UP SERVER? SET UP GET REQUESTS?
// SOLVED: PREVIOUSLY WE ROUTED IN THE SERVER FILE. HOW DO I LINK TO THE GET REQUESTS IF THEY ARE IN A DIFFERENT FILE? USE A SCRIPT TAGE FOR HTML ROUTES?

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
var port = 8000

//Use api routes
app.use('/api', api)
//Use html routes
app.use('/', html)

//Use middleware to parse data passed to array from survey
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Start the server up with the listen function
app.listen(port, function() {
    console.log("App listening on port: " + port)
});
