"use strict";
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "product",
    {
      title: DataTypes.STRING,
      slug: DataTypes.STRING,
      price: DataTypes.FLOAT,
      min_order: DataTypes.INTEGER,
      max_order: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      image_one: DataTypes.STRING,
      image_two: DataTypes.STRING,
      image_three: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {}
  );
  product.associate = function (models) {
    product.belongsToMany(models.group, {
      through: models.group_product,
    });
  };
  return product;
};
