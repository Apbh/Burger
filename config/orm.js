var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }

        arr.push(key + "=" + value);
      }
    }
  
    return arr.toString();
  }


var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        //call back function works when query conditions have been met and result is sent to burger.js
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) { throw err};
            console.log(result);
            cb(result);
        })
    },

    //To create a new value
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += "(";
        queryString += cols.toString();
        queryString += ") ";
        queryString += " VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {throw err};
            console.log(result);
            cb(result);
        })
    },

    //To update a value
    updateOne: function(table, objColVal, condition, cb){
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVal);
        queryString += " WHERE ";
        //refers to ID
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            cb (result);
        });
    }
    
};

module.exports = orm;


