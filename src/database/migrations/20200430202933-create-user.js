"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      password: Sequelize.STRING,
      account_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      phone_verified: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      bvn_verified: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      naira_balance: {
        defaultValue: 0,
        type: Sequelize.FLOAT(11, 2),
      },
      phone_number: {
        type: Sequelize.STRING,
        unique: true,
      },
      photo_profile: {
        type: Sequelize.STRING,
        defaultValue: "human.png",
      },
      pin: {
        type: Sequelize.INTEGER,
      },
      phrase: {
        type: Sequelize.STRING,
      },
      usdt_phrase: {
        type: Sequelize.STRING,
      },
      btc_xpub: {
        type: Sequelize.STRING,
      },
      eth_xpub: {
        type: Sequelize.STRING,
      },
      usdt_xpub: {
        type: Sequelize.STRING,
      },
      account_number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bank_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      verified: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      push_subscription: {
        type: Sequelize.TEXT,
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
    return queryInterface.dropTable("users");
  },
};
