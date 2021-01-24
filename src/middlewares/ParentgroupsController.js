const model = require("../database/models").parentgroup;
const ApiController = require("./library/ApiController");

const Controller = { ...ApiController };

Controller.model = model;

Controller.readBy = "slug";

Controller.include = "groups";

Controller.readInclude = "groups";

Controller.createBody = ({ name }) => {
  const slug = name.replace(/ /g, "-").toLowerCase();
  return { name, slug };
};

Controller.sync = async function (request, response) {
  const { id, groups } = request.body;

  const product = await this.model.findOne({
    where: { id },
    include: "groups",
  });

  if (!product) {
    return response.json({ errors: ["not found"] });
  }

  const parsed = JSON.parse(JSON.stringify(product.dataValues));
  const groupsFromDatabase = parsed.groups.map((obj) => obj.id);

  await product.removeGroups(groupsFromDatabase);
  await product.addGroups(groups);

  const data = await this.model.findOne({ where: { id }, include: "groups" });

  return response.json({ data, errors: [], message: "synced" });
};

for (let key in Controller) {
  if (typeof Controller[key] == "function" && key != "model") {
    Controller[key] = Controller[key].bind(Controller);
  }
}

module.exports = Controller;
