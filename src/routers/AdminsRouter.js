const express = require("express");
const Controller = require("../middlewares/AdminsController");
const P = require("../middlewares/validators/PermissionsValidator");
const Validator = require("../middlewares/validators/AuthValidator");

const router = express.Router();

router.post("/admins/auth/signin", Validator.signin, Controller.signin);

router.get("/admins/auth/status", Controller.status);

router.get("/admins/auth/signout", P.admin, Controller.signout);

router.post("/admins/auth/resendpin", Controller.resendPin);

router.patch("/admins/auth/password", P.admin, Controller.updatePassword);

module.exports = router;
