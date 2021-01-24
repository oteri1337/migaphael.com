"use strict";
module.exports = (sequelize, DataTypes) => {
  const rate = sequelize.define(
    "rate",
    {
      type: {
        type: DataTypes.INTEGER,
      },
      rate: {
        type: DataTypes.INTEGER,
      },
      cryptoId: {
        type: DataTypes.INTEGER,
      },
      lower_limit: {
        type: DataTypes.INTEGER,
      },
      upper_limit: {
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  rate.associate = function (models) {
    // associations can be defined here
  };
  return rate;
};
