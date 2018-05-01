var express = require('express');
var path = require('path');
var indexPath = path.join(__dirname,'../views/index.html')

module.exports = function (req, res) {
  // res.render('index.html', { title: 'Express' });
    console.log('__dirname = ',__dirname+'   \n start = '+indexPath);
    res.sendfile(indexPath,'',function(error){
        console.log('error = ',error);
    })
}
