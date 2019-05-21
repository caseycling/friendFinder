//API ROUTES
//===============================================

// GET request to display all potential friends in JSON format with /api/friends entered as end point in url
app.get("/api/friends", function (req, res) {
    return res.json(potentialFriends);
});

// POST request to receive data from client and push to potentialFriends array
app.post("/api/waitlist", function (req, res) {
    return potentialFriends.push(req.body);
});


