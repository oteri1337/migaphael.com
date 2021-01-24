"use strict";
module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define(
    "admin",
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        get: () => {
          return "";
        },
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      photo_profile: DataTypes.STRING,
      pin: DataTypes.INTEGER,
    },
    {}
  );
  admin.associate = function (models) {
    // associations can be defined here
  };
  return admin;
};
