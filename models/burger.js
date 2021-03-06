var orm = require("../config/orm.js");
//interacts with function in orm and runs cb function with results as a parameter
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    insertOne: function(cols,vals,cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },

    updateOne:function(objColVal, condition,cb){
        orm.updateOne("burgers", objColVal, condition, function(res){
            cb(res);
        })
    }

};

module.exports = burger;