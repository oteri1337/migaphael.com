const GroupsValidator = {};

GroupsValidator.create = function (request, response, next) {
  const errors = [];
  const { name } = request.body;

  if (name === undefined) {
    errors.push("name is required");
  }

  if (errors.length) {
    return response.json({ errors, data: {}, message: "" });
  }

  next();
};

GroupsValidator.update = function (request, response, next) {
  const errors = [];
  const { name, id } = request.body;

  if (name === undefined) {
    errors.push("name is required");
  }

  if (id === undefined) {
    errors.push("id is required");
  }

  if (errors.length) {
    return response.json({ errors, data: {}, message: "" });
  }

  next();
};

GroupsValidator.sync = function (request, response, next) {
  const errors = [];
  const { id, groups } = request.body;

  if (id === undefined) {
    errors.push("id is required");
  }

  if (groups === undefined) {
    errors.push("group(s) are required");
  }

  if (errors.length) {
    return response.json({ errors, data: {}, message: "" });
  }

  next();
};

module.exports = GroupsValidator;
