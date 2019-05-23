//Variable that stores current user information
var currentUser
//Array that stores all user objects
var potentialFriends = [];

//Most compatiable match, after point evaluation
var matchedFriend

//Click handler to route user to survey
$("#survey").on("click", function () {
    // //Route that sends to survey page
    // router.get("/survey", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/survey.html"))
    // })
    console.log("hello world")
})

//Capture user input for name, photo and scores
//Save to currentUser object