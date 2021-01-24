"use strict";
module.exports = (sequelize, DataTypes) => {
  const parentgroup = sequelize.define(
    "parentgroup",
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
    },
    {}
  );
  parentgroup.associate = function (models) {
    parentgroup.belongsToMany(models.group, {
      through: models.parentgroupgroup,
    });
  };
  return parentgroup;
};
