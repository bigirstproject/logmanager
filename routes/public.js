var express = require('express');
var path = require('path');

module.exports = function (req, res) {
    var url = path.join(__dirname,'../'+req.url)
    res.sendfile(url,'',function(error){
        console.log('error = ',error);
    })
}
