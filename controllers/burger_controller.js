var express = require("express")

var burger = require("../models/burger.js")


var router = express.Router();

router.get("/", function(req,res){
    burger.all(function(data){
        var hbarsObject = {
        burgers: data
        }
    });
    console.log(hbarsObject);
    res.render("index", hbarsObject);
})

router.post("/api/burgers", function(req,res){
    burger.create([
        "burger_name", "devoured"
    ],
[
    req.body.name , req.body.devoured
], function(result){
    res.json({id: result.insertID});
});
});




// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
