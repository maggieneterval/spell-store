'use strict';
var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('order', {
    status: {
        type: Sequelize.ENUM, values: ['pending', 'paid', 'complete']
    },
    order_type: {
        type: Sequelize.STRING
    },
    billing_address: {
        type: Sequelize.STRING
    },
    shipping_address: {
    	type: Sequelize.STRING
    },
    shipping_status: {
    	type: Sequelize.ENUM, values: ['pending', 'shipped']
    }
});