'use strict';
var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('product', {
    title: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    photo: {
        type: Sequelize.STRING
    },
    inventory: {
        type: Sequelize.INTEGER
    },
    deliverable: {
        type: Sequelize.STRING
    }
});
