"use strict";

require("dotenv").config();

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);

const env = process.env.NODE_ENV || "development";
let config = {};
// let config = require(__dirname + "/../../../database.json")[env];

const db = {};

let sequelize;

const { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_TYPE } = process.env;

config.host = DB_HOST;

config.dialect = DB_TYPE;

config.operatorsAliases = 0;

sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, config);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    // const model = sequelize["import"](path.join(__dirname, file));
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
