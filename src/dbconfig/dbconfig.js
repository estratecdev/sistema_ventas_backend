const { Sequelize } = require("sequelize");

require('dotenv').config();

const sequelise = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: "mysql",
    host: process.env.DB_HOST
});


function init() {
    sequelise.sync({
        alter: true
    }).then(res => {
        console.log("Database connection successful")
    }).catch(err => console.log("Errors", err))
}

async function connect()
{
    try {
        await sequelise.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}


function close()
{
    sequelise.close()
}


exports.sequelise = sequelise;
exports.connect = connect;
exports.close = close;
exports.init = init;


