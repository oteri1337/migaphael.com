"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class parentgroupgroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  parentgroupgroup.init(
    {
      groupId: DataTypes.INTEGER,
      parentgroupId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "parentgroupgroup",
      tableName: "parentgroup_groups",
    }
  );
  return parentgroupgroup;
};
