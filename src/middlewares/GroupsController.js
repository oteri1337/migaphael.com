const model = require("../database/models").group;
const ApiController = require("./library/ApiController");

const Controller = { ...ApiController };

Controller.model = model;

Controller.readBy = "slug";

Controller.readInclude = "products";

Controller.createBody = ({ name }) => {
  const slug = name.replace(/ /g, "-").toLowerCase();
  return { name, slug };
};

for (let key in Controller) {
  if (typeof Controller[key] == "function" && key != "model") {
    Controller[key] = Controller[key].bind(Controller);
  }
}

module.exports = Controller;
