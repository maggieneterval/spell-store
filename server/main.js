'use strict';
var chalk = require('chalk');
var db = require('./db');

// Create a node server instance! cOoL!
var server = require('http').createServer();

var createApplication = function () {
    var app = require('./app')(db);
    server.on('request', app); // Attach the Express application.
    require('./io')(server);   // Attach socket.io.
};

var startServer = function () {

    var PORT = process.env.PORT || 1337;

    server.listen(PORT, function () {
        console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
    });

};

var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://spellstorellc%40gmail.com:magicalme@smtp.gmail.com');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Spell Store 👥" <spellstorellc%40gmail.com>', // sender address
    to: 'samanthalowe2010@gmail.com', // list of receivers
    subject: 'Hello ', // Subject line
    text: 'Wingarduim Leviosa', // plaintext body
    html: '<b>Wingardium leviosa</b>' // html body
};

// // send mail with defined transport object
// transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         return console.log(error);
//     }
//     console.log('Message sent: ' + info.response);
// });

db.sync().then(createApplication).then(startServer).catch(function (err) {
    console.error(chalk.red(err.stack));
});
