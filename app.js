const express = require('express')
const http = require('http')
const path = require('path')
const errorHandler = require('errorhandler')
const notifier = require('node-notifier')
const config = require('./config')
// const log = require('./libs/log')(module)

const app = express()
app.set('port', config.get('port'))

http.createServer(app).listen(app.get('port'), () => {
    console.log('Express server listening on port ' + config.get('port'));
})

app.use((req, res, next) => {
    if (req.url == '/') {
        res.end("Hello")
    } else {
        next()
    }
})
app.use((req, res, next) => {
    if (req.url == '/test') {
        res.end("Test")
    } else {
        next()
    }
})
app.use((req, res, next) => {
    if (req.url == '/forbidden') {
        next(new Error("wops, denied"))
    } else {
        next()
    }
})
app.use((req, res) => {
    res.send(404, "Page Not Found Sorry")
})

function errorNotification (err, str, req) {
  let title = 'Error in ' + req.method + ' ' + req.url
 
  notifier.notify({
    title: title,
    message: str
  })
}

// обработчик ошибок
if (app.get('env') == 'development') {
    app.use(errorHandler({log: errorNotification}))
} else {
    res.send(500)
}

