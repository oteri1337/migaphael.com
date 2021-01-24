"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        name: "Fruits & Vegetables",
        image: "Group1.png",
        slug: "fruits-and-vegetables",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Baby Items",
        image: "Group2.png",
        slug: "baby-items",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Provisions",
        image: "Group3.png",
        slug: "provisions",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Herbs & Spices",
        image: "Group4.png",
        slug: "herbs-and-spices",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Stationaries",
        image: "Group5.png",
        slug: "stationaries",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Diary",
        image: "Group6.png",
        slug: "diary",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return queryInterface.bulkInsert("groups", data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("groups", null, {});
  },
};
