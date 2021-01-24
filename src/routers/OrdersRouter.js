const express = require("express");
const Controller = require("../middlewares/OrdersController");
const V = require("../middlewares/validators/OrdersValidator");
const P = require("../middlewares/validators/PermissionsValidator");

const router = express.Router();

router.get("/orders", P.admin, Controller.list);

router.delete("/orders", P.admin, Controller.delete);

router.post("/orders/search", Controller.search);

router.post("/orders", V.create, Controller.create);

router.patch("/orders/confirm/flutter", Controller.confirmFlutterPayment);

router.get("/orders/:attr", Controller.read);

module.exports = router;
