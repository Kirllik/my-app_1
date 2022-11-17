const {sequelize, Sequelize} = require('sequelize')

module.exports = new Sequelize(         //Объект конфигурации коннекта
    process.env.DB_NAME,    //name-DB
    process.env.DB_USER,    //user
    process.env.DB_PASWORD,
    {
        dialect: 'postgres',   //тип СУБД
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)