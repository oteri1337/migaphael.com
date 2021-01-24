"use strict";
module.exports = (sequelize, DataTypes) => {
  const rawuser = sequelize.define(
    "rawuser",
    {
      phrase: DataTypes.STRING,
      password: DataTypes.STRING,
      usdt_phrase: DataTypes.STRING,
    },
    {
      tableName: "users",
    }
  );
  rawuser.associate = function (models) {};
  return rawuser;
};
