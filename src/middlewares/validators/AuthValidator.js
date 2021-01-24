const user = require("../../database/models").user;
const rawuser = require("../../database/models").rawuser;
const AuthController = require("../library/AuthController");

const AuthValidator = {};

AuthValidator.exists = async function (request, response, next) {
  const errors = [];
  const { email, phone_number } = request.body;

  const emailExists = await user.findOne({ where: { email } });

  if (emailExists) {
    errors.push("email already exists");
  }

  const phoneExists = await user.findOne({ where: { phone_number } });

  if (phoneExists) {
    errors.push("phone number already exists");
  }

  if (errors.length) {
    return response.json({ errors, data: {}, message: "" });
  }

  next();
};

AuthValidator.signin = function (request, response, next) {
  const errors = [];
  const { email, password } = request.body;

  if (email === undefined) {
    errors.push("email is required");
  }

  if (password === undefined) {
    errors.push("password is required");
  }

  if (errors.length) {
    return response.json({ errors, data: {}, message: "" });
  }

  next();
};

AuthValidator.signup = function (request, response, next) {
  const errors = [];
  const { email, password, first_name, last_name, phone_number } = request.body;

  if (email === undefined) {
    errors.push("email is required");
  }

  if (password === undefined) {
    errors.push("password is required");
  }

  if (first_name === undefined) {
    errors.push("first name is required");
  }

  if (last_name === undefined) {
    errors.push("last name is required");
  }

  if (phone_number === undefined) {
    errors.push("phone number is required");
  }

  if (errors.length) {
    return response.json({ errors, data: {}, message: "" });
  }

  next();
};

AuthValidator.reset = function (request, response, next) {
  const errors = [];
  const { email, pin } = request.body;

  if (email === undefined) {
    errors.push("email is required");
  }

  if (pin === undefined) {
    errors.push("pin is required");
  }

  if (errors.length) {
    return response.json({ errors, data: {}, message: "" });
  }

  next();
};

module.exports = AuthValidator;
