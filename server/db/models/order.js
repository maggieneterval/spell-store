'use strict';
var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('order', {
    status: {
        type: Sequelize.ENUM, values: ['pending', 'paid', 'complete']
    },
    billing_address: {
        type: Sequelize.STRING,
        allowNull: false // be sure to include these validators. 
        // Remember from the Auther Defense workshop that there 
        // are ways to get around the frontend validators
    },
    shipping_address: {
    	type: Sequelize.STRING,
        allowNull: false
    },
    shipping_status: {
    	type: Sequelize.ENUM, values: ['pending', 'shipped']
    }
},{
    scopes: {
        populated: () => ({ // function form lets us use to-be-defined models
          include: [{
            model: db.model('product')
          }]
        })
    }
});
