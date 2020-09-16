'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(16),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      user: {
        allowNull: false,
        type: Sequelize.STRING(12),
        unique: true,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(60),
      },
      access: {
        allowNull: false,
        type: Sequelize.INTEGER(1)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Users')
  }
};
