"use strict";
module.exports = (sequelize, DataTypes) => {
  const orderproduct = sequelize.define(
    "order_product",
    {
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {}
  );
  orderproduct.associate = function (models) {
    // associations can be defined here
  };
  return orderproduct;
};
