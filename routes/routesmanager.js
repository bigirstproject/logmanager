/**
 * Created by sun on 2018/4/29.
 */
var express = require('express');
var managerrouter = express.Router();

managerrouter.use(function timeLog(req, res, next) {
    var time = new Date();
    console.log('manager spend Time start: ', time.toLocaleString());
    next();
});

managerrouter.get('/public/*', function(req, res) {
    require('./public')(req,res);
});


managerrouter.get('/', function(req, res) {
    require('./index')(req,res);
});

managerrouter.post('/users',function(req, res) {
    require('./users')(req,res);
});

managerrouter.get('/table',function(req, res) {
    require('./table')(req,res);
});

managerrouter.get('/query',function(req, res) {
    require('./query1')(req,res);
});

managerrouter.get('/add',function(req, res) {
    require('./add')(req,res);
});

managerrouter.get('/edit',function(req, res) {
    require('./edit')(req,res);
});

managerrouter.get('/del',function(req, res) {
    require('./del')(req,res);
});
managerrouter.post('/upload',function(req, res){
    console.log(req.body);
    console.log(req.files);
});

console.log('managerrouter');

module.exports  = function(app) {
    console.log('start ');
    app.use('/', managerrouter);
};
