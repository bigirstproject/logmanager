var express = require('express');
var URL = require('url');
var connection = require('../sql/sqlconfig');

//SQL语句
var sql = 'SELECT * FROM loginfo';
var addSql = 'INSERT INTO loginfo(version,os,feedback,infoaddress,date) VALUES(?,?,?,?,?)';

module.exports = function (req, res) {
    //console.log('req.url = ', req.url);
    //解析请求参数
    var params = URL.parse(req.url, true).query;
   // console.log('  params = ' + params.text());
    var addSqlParams = [params.version, params.os, params.feedback, params.infoaddress, params.date];

    //增
    connection.query(addSql, addSqlParams, function (err, result) {
        if (err) {
            console.log('insert error - ', err.message);
        } else {
            console.log('insert sucess - ', result);
        }
        //把搜索值输出
        res.send(result);
    });

    //查
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('select error - ', err.message);
            return;
        } else {
            console.log('select sucess - ', result);
        }
        //把搜索值输出
       // res.send(result);
    });
}