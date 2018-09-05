var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        console.log("Inside the ORM!!");
          var queryString = "SELECT * FROM burgers";
          connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            console.log("Got the goods!!", result);
            cb(result);
          });
        }
    // insertOne: function() {

    // },
    // updateOne: function() {

    // }
}
    module.exports = orm;
