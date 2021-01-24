"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      slug: {
        type: Sequelize.STRING,
        unique: true,
      },
      price: {
        type: Sequelize.FLOAT,
      },
      min_order: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      max_order: {
        type: Sequelize.INTEGER,
        defaultValue: 100,
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      image_one: {
        type: Sequelize.STRING,
        defaultValue: "image.png",
      },
      image_two: {
        type: Sequelize.STRING,
        defaultValue: "image.png",
      },
      image_three: {
        type: Sequelize.STRING,
        defaultValue: "image.png",
      },
      description: {
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
    return queryInterface.dropTable("products");
  },
};
