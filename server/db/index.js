'use strict';
var db = require('./_db');
module.exports = db;

var User = require('./models/user');
var Order = require('./models/order');
var OrderDetail = require('./models/order_detail');

User.hasMany(Order);
Order.belongsTo(User);


