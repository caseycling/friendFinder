//API ROUTES
//===============================================

//Use router to create router module
var express = require('express')
var path = require('path')
var router = express.Router()
var potentialFriends = require('../data/friends');

// GET request to display all potential friends in JSON format with /api/friends entered as end point in url
router.get("/api/friends", function (req, res) {
    return res.json(potentialFriends);
});

// POST request to receive data from client and push to potentialFriends array
router.post("/api/friends", function (req, res) {
    return potentialFriends.push(req.body);
});

//Export routes
module.exports = router
