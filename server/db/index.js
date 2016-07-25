'use strict';
var db = require('./_db');
module.exports = db;

var User = require('./models/user');
var Order = require('./models/order');
var OrderDetail = require('./models/order_detail');
var Product = require('./models/product');
var Review = require('./models/review');

User.hasMany(Order);
Order.belongsTo(User);
User.hasMany(Review);
Review.belongsTo(User);
Review.belongsTo(Product);
Product.belongsToMany(Order, {as: 'OrderDetail'});

