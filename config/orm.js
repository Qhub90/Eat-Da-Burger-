var connection = require("./connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  

var orm = {
    selectAll: function(tableInput, cb) {
        console.log("Inside the ORM!!");
          var queryString = "SELECT * FROM " + tableInput + ";";
          connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            console.log("Got the goods!!", result);
            cb(result);
          });
        },
        insertOne: function(table, cols, vals, cb) {
            var queryString = "INSERT INTO " + table;
        
            queryString += " (";
            queryString += cols.toString();
            queryString += ") ";
            queryString += "VALUES (";
            queryString += printQuestionMarks(vals.length);
            queryString += ") ";
        
            console.log(queryString);
        
            connection.query(queryString, vals, function(err, result) {
              if (err) {
                throw err;
              }
        
              cb(result);
            });
          },

    
    // updateOne: function() {

    // }
}
    module.exports = orm;
