const { DataTypes } = require("sequelize");
const db = require("../db/connection");
const Tutor = require("./Tutor");

const Pet = db.define("Pet", {
  name: {
    type: DataTypes.STRING,
    required: true,
  },
  species: {
    type: DataTypes.STRING,
    required: true,
  },
  carry: {
    type: DataTypes.STRING,
  },
  weight: {
    type: DataTypes.STRING,
    required: true,
  },
  date_of_birth: {
    type: DataTypes.STRING,
  },
});

Tutor.hasMany(Pet);
Pet.belongsTo(Tutor);

module.exports = Pet;
