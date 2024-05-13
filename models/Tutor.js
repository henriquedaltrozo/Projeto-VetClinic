const { DataTypes } = require("sequelize");
const db = require("../db/connection");

const Tutor = db.define("Tutor", {
  name: {
    type: DataTypes.STRING,
    required: true,
  },
  phone: {
    type: DataTypes.INTEGER,
    required: true,
  },
  email: {
    type: DataTypes.STRING,
  },
  date_of_birth: {
    type: DataTypes.STRING,
    required: true,
  },
  zip_code: {
    type: DataTypes.STRING,
    required: true,
  },
});

module.exports = Tutor;
