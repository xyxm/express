//引入express
var express = require('express');
//使用express的路由router就是app
var router = express.Router();
//引入了模型文件
var student=require('../models/studentModel')
//路由
router.get('/queryStudent', function(req, res) {
  
     student.queryStudent(function(data){
             console.log(data);
                 res.send(data);
     });
});



module.exports = router;
