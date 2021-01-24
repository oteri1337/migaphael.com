const crypto = require("crypto");

("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "admins",
      [
        {
          email: "info@moraclothing.com",
          password: crypto
            .createHash("md5")
            .update("adminpassword")
            .digest("hex"),
          first_name: "Peter",
          last_name: "Isheke",
          pin: 12345,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("admins", null, {});
  },
};
