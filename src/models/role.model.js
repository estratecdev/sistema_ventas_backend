const { Sequelize,DataTypes } = require("sequelize");
const {sequelise} =require("../dbconfig/dbconfig");

const Role = sequelise.define("roles", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  // Otros campos del rol
}, {
  sequelise,
  modelName: 'Role',
});

exports.Role = Role;