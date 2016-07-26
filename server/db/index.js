'use strict';
var db = require('./_db');
module.exports = db;

var User = require('./models/user');
var Order = require('./models/order');
var Product = require('./models/product');
var Review = require('./models/review');
var OrderDetail = require('./models/order_detail');

User.hasMany(Order);
Order.belongsTo(User);
User.hasMany(Review);
Review.belongsTo(User);
Review.belongsTo(Product);
<<<<<<< HEAD
Product.belongsToMany(Order, {through: OrderDetail});
=======
Product.belongsToMany(Order, {through: 'OrderDetail'});
>>>>>>> b85a34cccc766fee437642f6fede7cd850ea36e7

