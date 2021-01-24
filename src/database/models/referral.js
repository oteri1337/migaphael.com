"use strict";
module.exports = (sequelize, DataTypes) => {
  const referral = sequelize.define(
    "referral",
    {
      user_id: DataTypes.INTEGER,
      account_name: DataTypes.STRING,
      photo_profile: DataTypes.STRING,
    },
    {
      tableName: "users",
    }
  );
  referral.associate = function (models) {};
  return referral;
};
