var db = require('../../server/db');
var User = db.model('user');

var seedUsers = function () {

    var users = [
        {
            username: 'joseph',
            email: 'testing@fsa.com',
            password: 'password',
            isRegistered: true
        },
        {
            username: 'obama',
            email: 'obama@gmail.com',
            password: 'potus',
            isRegistered: true,
            isAdmin: true
        },
        {
            username: 'Piper Halliwell',
            email: 'phalliwell@gmail.com',
            isRegistered: false
        }
    ];


    var creatingUsers = users.map(function (userObj) {
        return User.create(userObj);
    });

    return Promise.all(creatingUsers);

};

module.exports = seedUsers;
