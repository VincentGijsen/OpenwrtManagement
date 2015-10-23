"use strict";

var Sequelize = require('sequelize');

module.exports = function(){
  return new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  storage: '/tmp/database.sqlite'
});
}
