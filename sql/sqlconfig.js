// var orm = require('orm');
//加载mysql模块
var mysql = require('mysql');

;console.log('sql  init ')

//创建连接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: '123456',
    database: 'logmanager',
    port: 3306
});

//执行创建连接
connection.connect();
;console.log('sql  connent sucess ')
module.exports =connection;


