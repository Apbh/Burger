var express = require("express");

var burger = require("../models/burger.js");

//CREATE the router for the app
var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var createObject = {
      burger: data
    };
    // console.log(createObject);
    res.render("index", createObject);
  });
});

router.post("/burgers", function(req, res) {
  
  burger.insertOne(["burger_name"], [req.body.burger_name], function(data) {
    res.redirect("/");
  });
});

router.put("/burgers/:id", function(req, res) {

  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({devoured:true}, condition,function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }else{
      res.redirect("/");
  
      }

    });
});

// Export routes for server.js to use.
module.exports = router;


