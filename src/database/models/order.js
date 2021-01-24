"use strict";
const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      email: DataTypes.STRING,
      cp_url: DataTypes.STRING,
      status: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      reference: DataTypes.STRING,
      full_name: DataTypes.STRING,
      total_in_ngn: DataTypes.FLOAT,
      phone_number: DataTypes.STRING,
      cp_reference: DataTypes.STRING,
      delivery_address: DataTypes.STRING,
      month: {
        type: DataTypes.STRING,
        get() {
          return moment(this.getDataValue("createdAt"))
            .format("MMM")
            .toUpperCase();
        },
      },
      day: {
        type: DataTypes.STRING,
        get() {
          return moment(this.getDataValue("createdAt")).format("DD");
        },
      },
    },
    {}
  );
  order.associate = function (models) {
    order.belongsToMany(models.product, {
      through: models.order_product,
    });
  };
  return order;
};
