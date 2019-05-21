//Require express
var express = require("express")
//Require path
var path = require("path")
//Set up express app
var app = express()
//Save port to variable
var port = 8000
//Use middleware to parse data passed to array from survey
//Start the server up with the listen function