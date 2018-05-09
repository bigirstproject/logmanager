var express = require('express');
var path = require('path');
var table = path.join(__dirname, '../views/table.html')

module.exports = function (req, res) {
    if (req.body === null) {
        res.json({
            code: -1,
            msg: "data is null"
        });
        return;
    }
    console.log('__dirname = ', __dirname + '   \n dir = ' + table);
    res.sendfile(table, function (error) {
        console.log('error = ', error);
    })
}