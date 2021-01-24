const model = require("../database/models").product;
const ApiController = require("./library/ApiController");

const Controller = { ...ApiController };

const include = "groups";

Controller.model = model;

Controller.readBy = "slug";

Controller.searchBy = "title";

Controller.include = "groups";

Controller.readInclude = "groups";

Controller.createBody = async (body) => {
  body.slug = Date.now() + "-" + body.title.toLowerCase().replace(/ /g, "-");
  return body;
};

Controller.sync = async function (request, response) {
  const { id, groups } = request.body;

  const product = await this.model.findOne({ where: { id }, include });

  if (!product) {
    return response.json({ errors: ["not found"] });
  }

  const parsed = JSON.parse(JSON.stringify(product.dataValues));
  const groupsFromDatabase = parsed.groups.map((obj) => obj.id);

  await product.removeGroups(groupsFromDatabase);
  await product.addGroups(groups);

  const data = await this.model.findOne({ where: { id }, include });

  return response.json({ data, errors: [], message: "synced" });
};

Controller.updateImage = async function (request, response) {
  const { id } = request.body;
  const files = request.files;

  if (!id) {
    return response.json({
      errors: ["id is required"],
      message: "",
      data: {},
    });
  }

  if (!files || !files.image) {
    return response.json({
      errors: ["image is required"],
      message: "",
      data: {},
    });
  }

  const image_one = this.uploadImage(files.image);

  if (image_one) {
    const body = { image_one };

    const updated = await this.model.update(body, { where: { id } });

    if (updated) {
      data = await this.model.findOne({ where: { id }, include });
      return response.json({ data, message: "update successful", errors: [] });
    }
  }

  return response.json({ errors: ["not found"], message: [], data: {} });
};

for (let key in Controller) {
  if (typeof Controller[key] == "function" && key != "model") {
    Controller[key] = Controller[key].bind(Controller);
  }
}

module.exports = Controller;
