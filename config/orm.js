var config = require("connection.js")





var orm = {
    all : function selectAll(){
        var selectall = "SELECT * FROM ??"
        config.query( selectall,  function(req,res){
            console.log(res)
        })
    },


    create: function insertOne(){
        config.query("INSERT INTO ? WHERE ??",function(req,res){

        })
    },
    {
      update: function updateOne(){
        config.query(" ",function(req,res){

        })
      }
    }

}
module.exports = orm;

// Example to follow Below::::
var orm = {
    select: function(whatToSelect, tableInput) {
      var queryString = "SELECT ?? FROM ??";
      connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    selectWhere: function(tableInput, colToSearch, valOfCol) {
      var queryString = "SELECT * FROM ?? WHERE ?? = ?";
  
      console.log(queryString);
  
      connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    leftJoin: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
      var queryString = "SELECT ?? FROM ?? AS tOne";
      queryString += " LEFT JOIN ?? AS tTwo";
      queryString += " ON tOne.?? = tTwo.??";
  
      console.log(queryString);
  
      connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(
        err,
        result
      ) {
        if (err) throw err;
        console.log(result);
      });
    }
  };
  
  module.exports = orm;
  