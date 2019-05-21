//DO I NEED TO REQUIRE HTTP?
//WHAT DO I DO AFTER STARTING UP SERVER? SET UP GET REQUESTS?
//PREVIOUSLY WE ROUTED IN THE SERVER FILE. HOW DO I LINK TO THE GET REQUESTS IF THEY ARE IN A DIFFERENT FILE? USE A SCRIPT TAGE FOR HTML ROUTES?
//HOW DO I PASS USER INFORMATION INTO ARRAYS IN FRIENDS.JS? CLICK HANDLERS? POST REQUESTS?
//I DONT ENTIRELY UNDERSTAND GET AND POST REQUESTS. GET IS TO GET INFORMATION FROM USER REQUEST (EX. QUESTIONAIRE ANSWERS)?
//POST IS TO SEND INFORMATION TO USER (EX. MATCHED FRIEND RESULTS)?



//Require express
var express = require("express")
//Require path
var path = require("path")
//Set up express app
var app = express()
//Save port to variable
var port = 8000

//Start the server up with the listen function
app.listen(port);

//Use middleware to parse data passed to array from survey