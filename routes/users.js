var express = require('express');
var path = require('path');
var userPath = path.join(__dirname,'../views/users.html')

module.exports = function (req, res) {
    if(req.body === null) {
        res.json({
            code: -1,
            msg: "data is null"
        });
        return;
    }
    console.log('__dirname = ',__dirname+'   \n start = '+userPath);
    res.sendfile(userPath,function(error){
        console.log('error = ',error);
    })
}