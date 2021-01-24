const model = require("../database/models").user;
const wallet = require("../database/models").wallet;
const account = require("../database/models").account;
const rawuser = require("../database/models").rawuser;
const AuthController = require("./library/AuthController");
const transaction = require("../database/models").transaction;
const nairatransaction = require("../database/models").nairatransaction;

const Controller = { ...AuthController };

Controller.model = model;

Controller.authKey = "user";

Controller.createInclude = "wallets";

Controller.readInclude = [
  "orders",
  "accounts",
  "referrals",
  "transactions",
  "nairatransactions",
  {
    model: wallet,
    as: "btc_wallets",
    required: false,
    where: {
      type: 1,
    },
  },
  {
    model: wallet,
    as: "eth_wallets",
    required: false,
    where: {
      type: 2,
    },
  },
  {
    model: wallet,
    as: "usdt_wallets",
    required: false,
    where: {
      type: 3,
    },
  },
];

Controller.readOrder = [
  [{ model: wallet, as: "btc_wallets" }, "createdAt", "DESC"],
  [{ model: wallet, as: "eth_wallets" }, "createdAt", "DESC"],
  [{ model: wallet, as: "usdt_wallets" }, "createdAt", "DESC"],
  [{ model: transaction, as: "transactions" }, "createdAt", "DESC"],
  [{ model: nairatransaction, as: "nairatransactions" }, "createdAt", "DESC"],
];

Controller.createBody = function (body) {
  return body;
};

Controller.createAccount = async function (request, response) {
  const errors = [];
  const { bank_name, account_name, account_number } = request.body;

  if (bank_name === undefined) {
    errors.push("bank name is required");
  }

  if (account_name === undefined) {
    errors.push("account name is required");
  }

  if (account_number === undefined) {
    errors.push("account number is required");
  }

  if (errors.length) {
    return response.json({ errors, data: {}, message: "" });
  }

  const user_id = request.session.user.id;

  await account.create({ bank_name, account_name, account_number, user_id });

  const data = await this.model.findOne({
    where: { id: user_id },
    order: this.readOrder,
    include: this.readInclude,
  });

  return response.json({ errors, data, message: "" });
};

Controller.deleteAccount = async function (request, response) {
  const errors = [];
  const { id } = request.body;

  if (id === undefined) {
    errors.push("id is required");
  }

  if (errors.length) {
    return response.json({ errors, data: {}, message: "" });
  }

  await account.destroy({ where: { id } });

  const data = await this.model.findOne({
    where: { id: request.session.user.id },
    order: this.readOrder,
    include: this.readInclude,
  });

  return response.json({ errors, data, message: "" });
};

Controller.sendNaira = async function (request, response) {
  // subtract naira
  const { id } = request.session.user;
  const User = await this.model.findOne({ where: { id } });
  const { amount, account_name, account_number, type } = request.body;
  const { bank_name, cryptoId, address } = request.body;

  const naira_balance = User.naira_balance - amount;

  User.update({ naira_balance });

  // if crypto id is not = 0 get rate

  // create naira transaction
  let t = { amount, account_name, type, bank_name, account_number };
  t = { ...t, cryptoId, address, user_id: id };
  await nairatransaction.create(t);

  // return updated user
  const data = await this.model.findOne({
    where: { id },
    order: this.readOrder,
    include: this.readInclude,
  });

  return response.json({
    data,
    errors: [],
    message: "",
  });
};

Controller.usdtBalance = async function (request, response) {
  let value = request.params.attr.split(",");

  if (!value[value.length - 1].length) {
    value.pop();
  }

  try {
    const data = await EthereumController.checkUsdtBalance(value);

    return response.json({
      data,
      errors: [],
      message: "",
    });
  } catch (error) {
    return response.json({
      data: {},
      errors: ["failed to get balance"],
      message: "",
    });
  }
};

for (let key in Controller) {
  if (typeof Controller[key] == "function" && key != "model") {
    Controller[key] = Controller[key].bind(Controller);
  }
}

module.exports = Controller;
