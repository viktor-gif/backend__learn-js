const User = require('./models/user')


console.log(typeof User)

const user = new User({
    username: "Tester6",
    password: "secret"
})

user.save((err, user, affected) => {
    if (err) throw err

    User.findOne({ username: "Tester" }, function (err, tester) {
        console.log(tester);
    })
})