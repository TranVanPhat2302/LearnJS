var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var qb = require('./modules/data/config');

var indexRouter = require('./routes/index'); // Add module index 
var usersRouter = require('./routes/users');
var itemsRouter = require('./routes/items'); 
var todoRouter = require('./routes/todolist'); 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', usersRouter);
app.use('/users', usersRouter);
app.use('/items', itemsRouter);
app.use('/index', indexRouter);
app.use('/todolist', todoRouter);

qb.connect((err)=>{
  if(err) throw err;
  // console.log(con)
  console.log('connection success')
})

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

module.exports = app;
 