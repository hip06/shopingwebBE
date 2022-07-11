'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      receiverName: {
        type: Sequelize.STRING,
        charset: 'utf8',
        collate: 'utf8_general_ci',
        allowNull: false
      },
      receiverAddress: {
        type: Sequelize.STRING,
        charset: 'utf8',
        collate: 'utf8_general_ci',
        allowNull: false
      },
      receiverPhone: {
        type: Sequelize.STRING,
        validate: {
          min: 10,
          max: 10
        },
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM(['waiting','on process','finish']),
        defaultValue: 'waiting'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bills');
  }
};
