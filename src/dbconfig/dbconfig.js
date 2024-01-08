const { Sequelize } = require("sequelize");

const sequelise = new Sequelize('sistema_ventas', 'root', 'test1234', {
    dialect: "mysql",
    host: "127.0.0.1"
})


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


