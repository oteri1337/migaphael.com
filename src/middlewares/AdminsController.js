const model = require("../database/models").admin;
const AuthController = require("./library/AuthController");

const Controller = { ...AuthController };

Controller.model = model;

Controller.authKey = "admin";

for (let key in Controller) {
  if (typeof Controller[key] == "function" && key != "model") {
    Controller[key] = Controller[key].bind(Controller);
  }
}

module.exports = Controller;
