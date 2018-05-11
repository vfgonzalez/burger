var orm = require("../config/orm.js")

var burgercall = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    create : function(name, cb){
        orm.create("burgers", name, function(res){
            cb(res);
        } );
    },
    update : function (condition, cb){
        orm.update("burgers",condition, cb
            // cb(res);
        );
    }
}

module.exports = burgercall;
// example::

// var cat = {
//     all: function(cb) {
//       orm.all("cats", function(res) {
//         cb(res);
//       });
//     },
//     // The variables cols and vals are arrays.
//     create: function(cols, vals, cb) {
//       orm.create("cats", cols, vals, function(res) {
//         cb(res);
//       });
//     },
//     update: function(objColVals, condition, cb) {
//       orm.update("cats", objColVals, condition, function(res) {
//         cb(res);
//       });
//     },
//     delete: function(condition, cb) {
//       orm.delete("cats", condition, function(res) {
//         cb(res);
//       });
//     }
//   };
  
//   // Export the database functions for the controller (catsController.js).
//   module.exports = cat;
  