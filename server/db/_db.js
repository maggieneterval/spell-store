var path = require('path');
var Sequelize = require('sequelize');

var env = require(path.join(__dirname, '../env'));
//change to URL when deploying with Heroku:
var db = new Sequelize(env.DATABASE_URL, { logging: env.LOGGING });
// var db = new Sequelize(env.DATABASE_URI, { logging: env.LOGGING });

module.exports = db;
