var express = require('express');
var path = require('path');
//创建服务器实例
var app = express();
//路由
var student =require('./routes/student.js');

//静态文件服务
app.use(express.static(path.join(__dirname, 'public')));
//请求student路由
app.use('/student',student);


module.exports = app;
