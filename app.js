var express = require('express');
var http = require('http')
var createError = require('http-errors');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const favicon = require('serve-favicon')
const config = require('./config')
const bodyParser = require('body-parser')

var app = express();
app.set('port', config.get('port'))

app.engine('ejs', require('ejs-locals'))
app.set('views', path.join(__dirname, 'template'));
app.set('view engine', 'ejs');

http.createServer(app).listen(config.get('port'), () => {
    console.log('Express server listening on port ' + config.get('port'));
})

app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))

if (app.get('env') == 'development') {
    app.use(logger('dev'));
} else {
    app.use(logger('default'));
}

app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(app.router)

// app.get('/', (req, res, next) => {
//         res.end('Hello world sdkf')
//     })
app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//     if (req.url == '/') {
//         res.end('Hello!!');
//     } else {
//         next()
//     } 
// })
// app.use((req, res, next) => {
//     if (req.url == '/test') {
//         res.end('Test');
//     } else {
//         next()
//     } 
// })
// app.use((req, res, next) => {
//     if (req.url == '/forbidden') {
//         next(new Error("Woops, denied. Get out of here!"));
//     } else {
//         next()
//     } 
// })
// app.use((req, res) => {
//     res.send(404, 'Sorry, page not found');
// })
app.use((err, req, res, next) => {

    console.log(err.message);
    
    if (app.get('env') == 'development') {
        res.end(`<h1>ERROR</h1><h2>${err.message}</h2>`)
    }
})





// var createError = require('http-errors');

// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');


// app.get('/', (req, res) => {
//     console.log('Hello from console');
//     res.end('<h1>Hello!</h1>')
// })

// view engine setup
// app.set('port', 3000)
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
