'use strict';
var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('order_detail', {
	order_id: {
		type: Sequelize.INTEGER
	},
	product_id: {
		type: Sequelize.INTEGER
	},
	quantity: {
		type: Sequelize.INTEGER
	},
	price: {
		type: Sequelize.INTEGER
	}
});
