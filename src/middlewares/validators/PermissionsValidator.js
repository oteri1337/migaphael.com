const PermissionsValidator = {};

PermissionsValidator.admin = (request, response, next) => {
  if (request.session.admin === undefined) {
    return response.json({
      errors: ["please signout then sign in as an admin"],
      data: {},
      message: "",
    });
  }
  next();
};

PermissionsValidator.user = (request, response, next) => {
  if (request.session.user === undefined) {
    return response.json({
      errors: ["please signout then sign in"],
      data: {},
      message: "",
    });
  }
  next();
};

module.exports = PermissionsValidator;
