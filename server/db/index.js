'use strict';
var db = require('./_db');
module.exports = db;

var User = require('./models/user');
var Product = require('./models/product');
var Review = require('./models/review');

User.hasMany(Review);
Review.belongsTo(User);
Review.belongsTo(Product);
