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
	},
    status: {
        type: Sequelize.ENUM, values: ['pending', 'complete']
    },
    order_type: {
        type: Sequelize.ENUM, values: ['wishlist', 'cart']
    },
    shipping_address: {
    	type: Sequelize.STRING
    },
    shipping_status: {
    	type: Sequelize.ENUM, values: ['pending', 'shipped']
    },
    purchaser_user: {
    	type: Sequelize.INTEGER
    },
   	target_user: {
    	type: Sequelize.INTEGER
    }
});
