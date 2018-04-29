var express = require('express');
var router = express.Router();
var URL = require('url');
var connection = require('../sql/sqlconfig');

console.log('222222222222  ');

//SQL语句
// var sql = 'SELECT * FROM loginfo';
//var addSql = 'INSERT INTO loginfo(version,os,feedback,infoaddress,date) VALUES(?,?,?,?,?)';
//var querySql = 'select * from loginfo where id = ? and version = ?  and os = ? and feedback = ? and infoaddress = ? and date = ?';

var querySql = 'select * from loginfo where id = ? and version = ? ';

module.exports = function (req, res) {
    //解析请求参数
    var params = URL.parse(req.url, true).query;
    // var addSqlParams = [params.id,params.version, params.os, params.feedback, params.infoaddress, params.date];
    var addSqlParams = [params.id, params.version];
    console.log('addSqlParams = ' + addSqlParams);
    var sql = {
        sql: querySql,
        values: addSqlParams, // 作为对象的属性
        timeout: 5000,
    }
    //查
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('select error - ', err.message);
            return;
        } else {
            console.log('select sucess - ', result);
        }
        //把搜索值输出
        res.send(result);
    });
};
