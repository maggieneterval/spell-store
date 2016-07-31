var Sequelize = require('sequelize');

var db = require('../_db');
var User = require('../models/user');

module.exports = db.define('review', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, 
{
  defaultScope: {
    include: [User]
  }
})
