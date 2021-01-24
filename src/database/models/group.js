"use strict";
module.exports = (sequelize, DataTypes) => {
  const group = sequelize.define(
    "group",
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {}
  );
  group.associate = function (models) {
    group.belongsToMany(models.product, {
      through: models.group_product,
    });
  };
  return group;
};
