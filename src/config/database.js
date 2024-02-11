const Sequelize = require('sequelize')
const config = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'kentaro',
    password: '----',
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
