const crypto = require("crypto");
const ApiController = require("./ApiController");

const AuthController = { ...ApiController };

AuthController.resendPin = async function (request, response) {
  const { email } = request.body;

  if (!email) {
    return response.json({
      errors: ["email is required"],
      message: "",
      data: {},
    });
  }

  let data = await this.model.findOne({ where: { email } });

  if (!data) {
    return response.json({
      errors: ["user not found"],
      message: "",
      data: {},
    });
  }

  let pin = Math.random();
  pin = pin * 100000;
  pin = pin.toFixed(0);

  await this.model.update({ pin }, { where: { email } });

  this.sendEmail(data.email, `Your pin is ${pin}`, "Pin");

  const message = "Pin Sent";

  return response.json({ data, message, errors: [] });
};

AuthController.resendSms = async function (request, response) {
  const { id } = request.session.user;
  const { phone_number } = request.body;

  if (!phone_number) {
    return response.json({
      errors: ["phone_number is required"],
      message: "",
      data: {},
    });
  }

  //let data = await this.model.findOne({ where: { phone_number } });

  // if (!data) {
  //   return response.json({
  //     errors: ["user not found"],
  //     message: "",
  //     data: {},
  //   });
  // }

  let pin = Math.random();
  pin = pin * 100000;
  pin = pin.toFixed(0);

  await this.model.update({ pin, phone_number }, { where: { id } });

  const data = await this.model.findOne({
    where: { id },
    order: this.readOrder,
    include: this.readInclude,
  });

  this.sendSms(phone_number, `Your TraderFX Verification PIN is ${pin}`);

  const message = "Pin Sent";

  return response.json({ data, message, errors: [] });
};

AuthController.verifyEmail = async function (request, response) {
  const { id, pin } = request.body;

  if (id === undefined) {
    return response.json({
      errors: ["id is required"],
      message: "",
      data: {},
    });
  }

  if (pin === undefined) {
    return response.json({
      errors: ["pin is required"],
      message: "",
      data: {},
    });
  }

  let data = await this.model.findOne({ where: { id, pin } });

  if (data) {
    let pin = Math.random();

    pin = pin * 100000;

    pin = pin.toFixed(0);

    const verified = 2;

    let updated = await this.model.update({ pin, verified }, { where: { id } });

    this.sendSms(data.phone_number, `Your TraderFX Verification PIN is ${pin}`);

    if (updated == 1) {
      data = await this.model.findOne({
        where: { id },
        order: this.readOrder,
        include: this.readInclude,
      });

      return response.json({
        data,
        message: "verification successful",
        errors: [],
      });
    }
  }

  return response.json({ errors: ["invalid pin"] });
};

AuthController.verifyPhone = async function (request, response) {
  const { id, pin } = request.body;

  if (id === undefined) {
    return response.json({
      errors: ["id is required"],
      message: "",
      data: {},
    });
  }

  if (pin === undefined) {
    return response.json({
      errors: ["pin is required"],
      message: "",
      data: {},
    });
  }

  let data = await this.model.findOne({ where: { id, pin } });

  if (data) {
    let pin = Math.random();

    pin = pin * 100000;

    pin = pin.toFixed(0);

    const phone_verified = 1;

    let data = await this.model.update(
      { pin, phone_verified },
      { where: { id } }
    );

    if (data == 1) {
      data = await this.model.findOne({
        where: { id },
        order: this.readOrder,
        include: this.readInclude,
      });
      return response.json({
        data,
        message: "verification successful",
        errors: [],
      });
    }
  }

  return response.json({ errors: ["invalid pin"] });
};

AuthController.encryptPassword = function (password) {
  return crypto.createHash("md5").update(password).digest("hex");
};

AuthController.create = async function (request, response) {
  const { body } = request;
  const { email } = body;

  const user = await this.model.findOne({ where: { email } });

  if (user) {
    return response.json({
      data: {},
      errors: ["email is in use"],
      message: "",
    });
  }

  const newBody = await this.createBody(body);

  newBody.password = this.encryptPassword(newBody.password);

  let pin = Math.random();

  pin = pin * 100000;

  pin = pin.toFixed(0);

  await this.model.create({ ...newBody, pin }, { include: this.createInclude });

  this.sendEmail(email, `Your verification pin is ${pin}`, "Verification Pin");

  const data = await this.model.findOne({
    where: { email },
    order: this.readOrder,
    include: this.readInclude,
  });

  request.session[this.authKey] = data;

  return response.json({ data, errors: [], message: "Created Successfully" });
};

AuthController.resetEmail = async function (request, response) {
  const { new_email, confirmation_email, email, pin } = request.body;

  if (new_email !== confirmation_email) {
    return response.json({
      errors: ["new email must match confirmation email"],
      message: "",
      data: {},
    });
  }

  let data = await this.model.findOne({ where: { email, pin } });

  if (!data) {
    return response.json({
      errors: ["invalid pin"],
      message: "",
      data: {},
    });
  }

  let new_pin = Math.random();

  new_pin = new_pin * 100000;

  new_pin = new_pin.toFixed(0);

  await this.model.update(
    { pin: new_pin, email: new_email, verified: 0 },
    { where: { email, pin } }
  );

  data = await this.model.findOne({ where: { email: new_email } });

  return response.json({
    errors: [],
    message: "",
    data,
  });
};

AuthController.resetPassword = async function (request, response) {
  const { new_password, confirm_new_password, email, pin } = request.body;

  if (new_password !== confirm_new_password) {
    return response.json({
      errors: ["new passwordl must match confirmation passwordl"],
      message: "",
      data: {},
    });
  }

  let data = await this.model.findOne({ where: { email, pin } });

  if (!data) {
    return response.json({
      errors: ["invalid pin"],
      message: "",
      data: {},
    });
  }

  let new_pin = Math.random();

  new_pin = new_pin * 100000;

  new_pin = new_pin.toFixed(0);

  const password = this.encryptPassword(new_password);

  await this.model.update(
    { pin: new_pin, password },
    { where: { email, pin } }
  );

  return response.json({
    errors: [],
    message: "Password Updated",
    data,
  });
};

AuthController.status = async function (request, response) {
  const session = request.session[this.authKey];

  if (session) {
    const data = await this.model.findOne({
      order: this.readOrder,
      where: { id: session.id },
      include: this.readInclude,
    });

    if (data) {
      return response.json({ errors: [], data, message: "" });
    }
  }

  return response.json({ errors: [], data: false, message: "" });
};

AuthController.signin = async function (request, response) {
  const { email } = request.body;

  const password = this.encryptPassword(request.body.password);

  let data = await this.model.findOne({
    order: this.readOrder,
    include: this.readInclude,
    where: { email, password },
  });

  if (data) {
    request.session[this.authKey] = data;

    let pin = Math.random();

    pin = pin * 100000;

    pin = pin.toFixed(0);

    const verified = 1;

    await this.model.update({ pin, verified }, { where: { id: data.id } });

    this.sendEmail(
      email,
      `
      Dear ${data.account_name},
      
      Your verification code is ${pin}
      

      This code remains valid for a short period. Please do not disclose it to anyone (including us)
      
      Notice: If you did not login to your account recently, your account may be compromised. 
      
      Please log in to your account and change your password or freeze your account immediately by contacting support.
      


      
      TFX Security Notice
      
      24/7 Help Center & Live Chat
      
      ©️ 2020 www.traderfxm.com All Rights Reserved.

      Join TFX community to explore more possibilities.
      `,
      "Traderfx Security check"
    );

    // this.sendEmail(
    //   email,
    //   `
    //   Someone just logged into your account, if it was not you please change your password immediatley.

    //   Device Info: ${request.headers["user-agent"]}

    //   `,
    //   "Traderfx Login Notification"
    // );

    if (data.verified == 2) {
      data.verified = 1;
    }

    return response.json({ data, errors: [], message: "" });
  }

  return response.json({
    data: false,
    errors: ["invalid email or password"],
    message: "",
  });
};

AuthController.signout = async function (request, response) {
  request.session[this.authKey] = false;

  return response.json({ errors: [], data: false, message: "" });
};

AuthController.updatePassword = async function (request, response) {
  const { new_password, confirm_new_password } = request.body;

  if (new_password !== confirm_new_password) {
    return response.json({
      errors: ["new passsword must match confirmation"],
      message: "",
      data: {},
    });
  }

  let password = this.encryptPassword(request.body.password);

  const { id } = request.session[this.authKey];

  const user = await this.model.findOne({ where: { id, password } });

  if (!user) {
    return response.json({
      errors: ["passsword is incorrect"],
      message: "",
      data: {},
    });
  }

  password = this.encryptPassword(new_password);

  await this.model.update({ password }, { where: { id } });

  return response.json({
    errors: [],
    message: "Password Updated",
    data: {},
  });
};

AuthController.updateProfile = async function (request, response) {
  const {
    bank_name,
    phone_number,
    account_name,
    account_number,
    country,
    state,
    address,
  } = request.body;

  const { id } = request.session[this.authKey];

  await this.model.update(
    {
      bank_name,
      phone_number,
      account_name,
      account_number,
      country,
      state,
      address,
    },
    { where: { id } }
  );

  const data = await this.model.findOne({
    where: { id },
    include: this.include,
  });

  return response.json({
    errors: [],
    message: "Profile Updated",
    data,
  });
};

module.exports = AuthController;
