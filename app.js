var createError = require('http-errors');//加载错误页面
var express = require('express');//加载express模块
var path = require('path');//路径模块
// var favicon = require('serve-favicon');//请求网页的logo
var cookieParser = require('cookie-parser');//这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象
var logger = require('morgan');//在控制台中，显示req请求的信息
//var bodyParser = require('body-parser');//node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据
var app = express();

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var query = require('./routes/query');
// var add = require('./routes/add');
// var edit = require('./routes/edit');
// var del = require('./routes/del');

// view engine setup(模板开始)
app.set('views', path.join(__dirname, 'views'));//设置视图根目录
app.set('view engine', 'jade');//设置视图格式（本人不太喜欢用jade，接下来会交大家使用html格式的文件）

// 载入中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//
// //配置路由，（'自定义路径'，上面设置的接口地址）
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/query', query);//查
// app.use('/add', add);//增
// app.use('/edit', edit);//改
// app.use('/del', del);//删

var routesmanager = require('./routes/routesmanager');
routesmanager(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log("NodeJS APP Log Manager Start");

module.exports = app;
