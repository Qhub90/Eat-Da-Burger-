var orm = require("../config/orm.js");

var burgers = {
    selectAll: function(cb) {
      console.log("Inside burgers!!");
        orm.selectAll("burgers", function(res) {
          console.log("We have the things in model", res);

          cb(res);
        }); 
      },
      insertOne: function(cols, vals, cb) {
        console.log("Inside the Model");
        orm.insertOne("burgers", cols, vals, function(res) {
          console.log("The Model", res);

          cb(res);
        });
      },

      update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
          cb(res);
        });
      },
}







module.exports = burgers;