var connection = require("./connection.js")





var orm = {
    all : function(tableInput,cb){
      var queryString = 'SELECT * FROM ' + tableInput+';'
      connection.query(queryString,function(err,results){
        if(err) throw err;
        // console.log(results);     
        cb(results)
      });
    },
    create: function(table,vals, cb){
      var queryString = "INSERT INTO " + table + " ('burger_name') "+"VALUES (?) ";


        connection.query(queryString,vals,function(err,response){
          if (err) throw err;
          console.log(response);
          cb(response);
        });
    },
    
      update: function(table, condition, cb){
        var queryString = "UPDATE "+ table + "SET devoured = true WHERE " +condition+";" 
        connection.query(queryString, function(err,response){
          if(err) throw err
          console.log(response);
          cb(response);
        });
      }
    

}
module.exports = orm;

// Example to follow Below::::
// var orm = {
    // select: function(whatToSelect, tableInput) {
    //   var queryString = "SELECT ?? FROM ??";
    //   connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //   });
    // },
  //   selectWhere: function(tableInput, colToSearch, valOfCol) {
  //     var queryString = "SELECT * FROM ?? WHERE ?? = ?";
  
  //     console.log(queryString);
  
  //     connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
  //       if (err) throw err;
  //       console.log(result);
  //     });
  //   },
  //   leftJoin: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
  //     var queryString = "SELECT ?? FROM ?? AS tOne";
  //     queryString += " LEFT JOIN ?? AS tTwo";
  //     queryString += " ON tOne.?? = tTwo.??";
  
  //     console.log(queryString);
  
  //     connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(
  //       err,
  //       result
  //     ) {
  //       if (err) throw err;
  //       console.log(result);
  //     });
  //   }
  // };
  
  // module.exports = orm;
  