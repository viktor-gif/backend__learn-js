const User = require('./models/user')
const mongoose = require('./libs/mongoose')
const async = require('async')

async.series([
    open,
    dropDatabase,
    createUsers,
    close
], function (err, results) {
    console.log(results);
})

function open(callback) {
    mongoose.connection.on('open', callback)
}
function dropDatabase(callback) {
    const db = mongoose.connection.db;
    db.dropDatabase(callback)
}
function createUsers(callback) {
    async.parallel([
        function (callback) {
            const vasya = new User({ username: 'Вася', password: 'supervasya' })
            vasya.save((err) => {
                callback(err, vasya)
            })
        },
        function (callback) {
            const petya = new User({ username: 'Петя', password: '12345' })
            petya.save((err) => {
                callback(err, petya)
            })
        },
        function (callback) {
            const admin = new User({ username: 'admin', password: 'thenthis' })
            admin.save((err) => {
                callback(err, admin)
            })
        }
    ], callback)
}
function close(callback) {
    mongoose.disconnect(callback)
}

// mongoose.connection.on('open', () => {
//     const db = mongoose.connection.db;

//     db.dropDatabase((err) => {
//         if (err) throw err
//         console.log('OK');

//         async.parallel([
//             function (callback) {
//                 const vasya = new User({ username: 'Вася', password: 'supervasya' })
//                 vasya.save((err) => {
//                     callback(err, vasya)
//                 })
//             },
//             function (callback) {
//                 const petya = new User({ username: 'Петя', password: '12345' })
//                 petya.save((err) => {
//                     callback(err, petya)
//                 })
//             },
//             function (callback) {
//                 const admin = new User({ username: 'admin', password: 'thenthis' })
//                 admin.save((err) => {
//                     callback(err, admin)
//                 })
//             }
//         ], function (err, results) {
//             console.log(results);
//             mongoose.disconnect()
//         })    
//     })
// })
