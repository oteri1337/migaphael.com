const path = require("path");
const { Op } = require("sequelize");
const nodemailer = require("nodemailer");

const ApiController = {};

ApiController.readBy = "id";

ApiController.searchBy = "id";

ApiController.include = "";

ApiController.createInclude = "";

ApiController.readInclude = "";

ApiController.listInclude = "";

ApiController.sendEmail = async function (to, text, subject) {
  const mailObject = {
    from: '"TraderFX" <info@traderfxm.com>',
    to,
    subject,
    text,
  };

  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  transport.sendMail(mailObject, (error, info) => {
    if (error) {
      console.log("failed to send email to", to);
    }
  });
};

ApiController.uploadImage = (file) => {
  console.log(file);
  const name = `${Date.now()}${file.name.toLowerCase().replace(/ /g, "-")}`;
  const imagePath = `../../../public_html/uploads/images/${name}`;
  const fullPath = path.resolve(__dirname, imagePath);
  file.mv(fullPath, function (error) {
    if (error) {
      console.log("failed to upload image", error);
      return false;
    }
  });
  return name;
};

ApiController.getList = async function (page, baseUrl, path, where = {}) {
  const limit = 120;

  const current_page = parseInt(page) || 1;

  let offset = 0;

  if (current_page > 1) {
    offset = (current_page - 1) * limit;
  }

  const { count, rows } = await this.model.findAndCountAll({
    where,
    limit,
    offset,
    include: this.include,
    order: [["createdAt", "DESC"]],
  });

  const divide = count / limit;

  const modulu = divide % 1;

  let last_page = Math.floor(divide);

  if (modulu != 0) {
    last_page = last_page + 1;
  }

  let next_page_url = baseUrl + path + "?page=" + (current_page + 1);

  if (current_page + 1 > last_page) {
    next_page_url = null;
  }

  const parsed = JSON.parse(JSON.stringify(rows));

  let object = {};
  parsed.forEach((row) => {
    object[row[this.readBy]] = row;
  });

  return {
    current_page,
    next_page_url,
    last_page,
    total: count,
    per_page: limit,
    array: rows,
    object: object,
    search_object: {},
  };
};

ApiController.create = async function (request, response) {
  const { body } = request;
  const newBody = await this.createBody(body, request);
  const data = await this.model.create(newBody);
  return response.json({ data, errors: [], message: "Created Successfully" });
};

ApiController.list = async function (request, response) {
  const { baseUrl, path, query } = request;
  const data = await this.getList(query.page, baseUrl, path);
  return response.json({ errors: [], message: "", data });
};

ApiController.read = async function (request, response) {
  const key = this.readBy;
  const value = request.params.attr;

  try {
    const data = await this.model.findOne({
      order: this.readOrder,
      where: { [key]: value },
      include: this.readInclude,
    });
    if (data) {
      return response.json({ data, errors: [], message: "" });
    }
    return response.json({ data, errors: ["not found"], message: "" });
  } catch (error) {
    return response.json({
      data: {},
      errors: ["unknown error"],
      message: "",
      error,
    });
  }
};

ApiController.search = async function (request, response) {
  const search = request.params.attr;

  const where = {
    [this.searchBy]: {
      [Op.substring]: search,
    },
  };

  const { baseUrl, path, query } = request;

  const data = await this.getList(query.page, baseUrl, path, where);

  return response.json({ errors: [], message: "", data });
};

ApiController.update = async function (request, response) {
  const { body } = request;
  const { id } = body;

  if (id === undefined) {
    return response.json({
      errors: ["id is required"],
      message: "",
      data: {},
    });
  }

  let data = await this.model.update(body, { where: { id } });

  if (data == 1) {
    data = await this.model.findOne({ where: { id } });
    return response.json({ data, message: "update successful", errors: [] });
  }

  return response.json({ errors: ["not found"], message: [], data: {} });
};

ApiController.delete = async function (request, response) {
  const { id } = request.body;

  if (id === undefined) {
    return response.json({
      errors: ["id is required"],
      message: "",
      data: {},
    });
  }

  let deleted = await this.model.destroy({ where: { id } });

  if (deleted == 1) {
    const { baseUrl, path, query } = request;
    const data = await this.getList(query.page, baseUrl, path);
    return response.json({ errors: [], message: "", data });
  }

  return response.json({
    errors: ["failed to delete"],
    mesage: "",
    data: {},
  });
};

module.exports = ApiController;
