var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('review', {
  date: {
    type: Sequelize.DATE,
    default: Sequelize.NOW,
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
})
