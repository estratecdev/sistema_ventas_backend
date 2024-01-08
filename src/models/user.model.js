const {DataTypes } = require('sequelize');
const {sequelise} =require("../dbconfig/dbconfig");
const {Role} = require('../models/role.model');
const {Permission} = require('../models/permission.model');
const User = sequelise.define("users", {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    firstname: DataTypes.STRING,
    password: DataTypes.STRING,
    lastname: DataTypes.STRING,
    contact: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: DataTypes.STRING,
  });
  
  exports.User = User;


// Asociaciones
User.belongsToMany(Role, { through: 'UserRole' });
Role.belongsToMany(User, { through: 'UserRole' });

Role.belongsToMany(Permission, { through: 'RolePermission' });
Permission.belongsToMany(Role, { through: 'RolePermission' });


