var db = require('./db.js');


var queryStudent=function(callback){
    db.query('SELECT * FROM student',function(err,res){
        
              callback(res);
        })
}
exports.queryStudent=queryStudent;