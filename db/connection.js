const Sequelize = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.DB_URL
});

module.exports = sequelize;
