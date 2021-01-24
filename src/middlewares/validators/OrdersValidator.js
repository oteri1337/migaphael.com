const OrdersValidator = {};

OrdersValidator.create = function (request, response, next) {
  const errors = [];
  const { email, products, phone_number } = request.body;

  if (email === undefined) {
    errors.push("email is required");
  }

  if (products === undefined) {
    errors.push("product(s) are required");
  }

  if (phone_number === undefined) {
    errors.push("phone number is required");
  }

  if (errors.length) {
    return response.json({ errors, data: {}, message: "" });
  }

  next();
};

module.exports = OrdersValidator;
