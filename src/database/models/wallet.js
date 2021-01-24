"use strict";
module.exports = (sequelize, DataTypes) => {
  const wallet = sequelize.define(
    "wallet",
    {
      type: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      path: DataTypes.INTEGER,
      label: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {}
  );
  wallet.associate = function (models) {
    // associations can be defined here
  };
  return wallet;
};
