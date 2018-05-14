var friends = require("../app/friends.js")

module.exports = function(app){


    app.get("/api/friends", function(req,res){
        return res.json(friends)
    })

    app.post("/api/friends", function(req,res){
        console.log(req.body)

        let newFriend = req.body;
        var matchScores = []
        let bestDiff = 0
        let bestMatch = friends[0]
        let iter = 0

        friends.forEach(element => {
            let diff = 0
            
            let i = 0
            element.scores.forEach(score =>{
                diff  += Math.abs(score - newFriend.scores[i])
                i++
            })
            if (iter === 0){

                bestDiff = diff
                iter ++
            } else {
                if (bestDiff < diff){

                } else {
                    bestDiff = diff
                    bestMatch = element
                }
            }
            
        });
        friends.push(newFriend)
        console.log(bestMatch.friendName)
        res.json(bestMatch)
    })


}