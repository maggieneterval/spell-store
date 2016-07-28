/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var chalk = require('chalk');
var db = require('../server/db');
var seedUsers = require('./model-seeds/user-seed');
var seedProducts = require('./model-seeds/product-seed.js');
var seedReviews = require('./model-seeds/review-seed.js');
var seedOrders = require('./model-seeds/order-seed.js');
var seedOrderDetails = require('./model-seeds/order-detail-seed.js')
var Promise = require('sequelize').Promise;

db.sync({ force: true })
    .then(function () {
        return seedUsers();
    })
    .then(function () {
        return seedProducts();
    })
    .then(function(){
        return seedOrders();
    })
    .then(function(){
        return seedOrderDetails();
    })
    .then(function () {
        return seedReviews();
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        process.exit(0);
    })
    .catch(function (err) {
        console.error(err);
        process.exit(1);
    });
