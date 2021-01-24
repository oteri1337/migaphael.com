const model = require("../database/models").order;
const ApiController = require("./library/ApiController");
const productModel = require("../database/models").product;
const orderProduct = require("../database/models").order_product;

const Controller = { ...ApiController };

Controller.model = model;

Controller.readBy = "reference";

Controller.include = "products";

Controller.readInclude = "products";

Controller.create = async function (request, response) {
  const { body } = request;

  const newBody = await this.createBody(body);

  const data = await this.model.create(newBody);

  for (id in body.products) {
    const orderId = data.id;
    const productId = id;
    const quantity = body.products[id].quantity;

    await orderProduct.create({ orderId, productId, quantity });
  }

  Controller.sendEmail(
    body.email,
    `
    Your order has been recieved, please complete your payment to proceed

    You can monitor your order @ https://www.traderfxm.com/shop/orders/${data.reference}

    Your purchase and use of TFX products and services are subject to the Terms of Service and Privacy Notice
    `,
    `TraderFX Order Confirmation`
  );

  Controller.sendEmail(
    "info@traderfxm.com",
    `
    A new order has been recieved in the shop, please standby to complete delivery

    You can monitor the order @ https://www.traderfxm.com/control/orders/${data.reference}

    `,
    `New Shop Order`
  );

  return response.json({ data, errors: [], message: "Created Successfully" });
};

Controller.createBody = async (body) => {
  let total = 0;

  for (id in body.products) {
    const product = await productModel.findOne({ where: { id } });
    const { price } = product.dataValues;
    total += price;
  }

  body.total_in_ngn = total;

  body.reference = Date.now();

  return body;
};

Controller.confirmFlutterPayment = async function (request, response) {
  const txref = request.body.tx_ref;
  const reference = txref;

  if (txref === undefined) {
    return response.json({
      errors: ["txref is required"],
      mesage: "",
      data: {},
    });
  }

  const SECKEY = process.env.FLUTTERWAVE_PRIVATE_KEY;

  const url = `https://api.ravepay.co/flwv3-pug/getpaidx/api/v2/verify`;

  let fetchResponse = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ txref, SECKEY }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  fetchResponse = await fetchResponse.json();

  if (fetchResponse.status == "success") {
    let data = await this.model.findOne({ where: { reference } });

    if (data.status == 1) {
      await this.model.update({ status: 2 }, { where: { reference } });
      data = await this.model.findOne({ where: { reference } });
    }

    return response.json({
      errors: [],
      mesage: "",
      data,
    });
  }

  return response.json({
    errors: ["fake transaction"],
    mesage: "",
    data: {},
  });
};

Controller.confirmPaystackPayment = async function (request, response) {
  const { reference } = request.body;

  if (reference === undefined) {
    return response.json({
      errors: ["reference is required"],
      mesage: "",
      data: {},
    });
  }

  const url = `https://api.paystack.co/transaction/verify/${reference}`;
  let fetchResponse = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_PRIVATE_KEY}`,
    },
  });
  fetchResponse = await fetchResponse.json();

  if (fetchResponse.status) {
    let data = await this.model.findOne({ where: { reference } });

    if (data.status == 1) {
      await this.model.update({ status: 2 }, { where: { reference } });
      data = await this.model.findOne({ where: { reference } });
    }

    return response.json({
      errors: [],
      mesage: "",
      data,
    });
  }

  return response.json({
    errors: ["fake transaction"],
    mesage: "",
    data: {},
  });
};

for (let key in Controller) {
  if (typeof Controller[key] == "function" && key != "model") {
    Controller[key] = Controller[key].bind(Controller);
  }
}

module.exports = Controller;
