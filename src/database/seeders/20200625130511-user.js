const faker = require("faker");
const AuthContoller = require("../../middlewares/library/AuthController");
("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [];

    for (let i = 1; i < 2; i++) {
      const newRecord = {
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        account_name: faker.name.findName(),
        pin: Math.floor(Math.random() * 10000),
        email: faker.internet.email().toLowerCase(),
        password: AuthContoller.encryptPassword("password"),
      };
      data.push(newRecord);
    }

    return queryInterface.bulkInsert("users", data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
