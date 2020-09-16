const db = require('../config/database')

const User = db.sequelize.define('Users', {
    name: {
        allowNull: false,
        type: db.Sequelize.STRING,
        validate: {
            len: [4, 16],
        },
    },
    email: {
        allowNull: false,
        type: db.Sequelize.STRING,
        validate: {
            isEmail: true,
            len: [5, 50],
        },
    },
    user: {
        allowNull: false,
        type: db.Sequelize.STRING,
        unique: true,
        validate: {
            len: [4, 12],
        },
    },
    access: {
        allowNull: false,
        type: db.Sequelize.STRING,
        validate: {
            len: [1],
        },
    },
    password: {
        allowNull: false,
        type: db.Sequelize.STRING,
        validate: {
            len: [60],
        },
    },
})

module.exports = {
    User
}