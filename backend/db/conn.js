const {Sequelize} = require('sequelize')

const db = new Sequelize(process.env.DB_NAME || 'db_solartech', process.env.DB_USER || 'root', process.env.DB_PASSWORD || '', {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 3306),
    dialect: 'mysql'
})

module.exports = db
