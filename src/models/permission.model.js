const { Sequelize,DataTypes } = require("sequelize");
const {sequelise} =require("../dbconfig/dbconfig");

const Permission = sequelise.define("permissions", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  // Otros campos del permiso
}, {
  sequelise,
  modelName: 'Permission',
});




exports.Permission = Permission;