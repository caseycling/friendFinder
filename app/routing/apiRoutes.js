//API ROUTES
//===============================================

// GET request to display all potential friends in JSON format with /api/friends entered as end point in url
app.get("/api/friends", function (req, res) {
    return res.json(potentialFriends);
});

// // Displays all wait list customers in JSON format 
// app.post("/api/waitlist", function (req, res) {
//     return res.json(waitlist);
// });


