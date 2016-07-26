var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('review', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    validate: {
      min: 4
    },
    allowNull: false
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
})
