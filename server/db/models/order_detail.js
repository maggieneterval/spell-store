'use strict';
var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('order_detail', {
	quantity: {
		type: Sequelize.INTEGER
	},
	price: {
		type: Sequelize.INTEGER
	}
}, {
	getterMethods: {
	    getTotal: function(){ 
	    	return this.quantity * this.price;
	    }
	}

});

