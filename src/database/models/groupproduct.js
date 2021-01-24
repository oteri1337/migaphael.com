"use strict";
module.exports = (sequelize, DataTypes) => {
  const groupproduct = sequelize.define(
    "group_product",
    {
      groupId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    {}
  );
  groupproduct.associate = function (models) {
    // associations can be defined here
  };
  return groupproduct;
};
