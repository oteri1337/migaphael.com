"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      total_in_ngn: {
        type: Sequelize.FLOAT,
      },
      total_in_crypto: {
        type: Sequelize.FLOAT,
      },
      reference: {
        type: Sequelize.STRING,
        unique: true,
      },
      cp_url: {
        unique: true,
        allowNull: true,
        type: Sequelize.STRING,
      },
      cp_reference: {
        unique: true,
        allowNull: true,
        type: Sequelize.STRING,
      },
      phone_number: {
        type: Sequelize.STRING,
      },
      full_name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      delivery_address: {
        type: Sequelize.STRING,
      },
      month: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      day: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("orders");
  },
};
