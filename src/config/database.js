const Sequelize = require('sequelize')
const config = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'kentaro',
    password: '55735573',
    database: 'wyddark',
    define: {
        timestamps: true,
        underscore: true,
    },
}
const sequelize = new Sequelize (config)

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}