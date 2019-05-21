// HTML ROUTES
// =============================================================

// Basic route that sends the user first to the home page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

//Route that sends to survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"))
})