var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  console.log("Start from route");
  burgers.selectAll(function(data) {
    console.log("We have the goods in the controller now", data);

    var myObject = {
      burgers: data
    };
    res.render("index", myObject);
  });
});

module.exports = router