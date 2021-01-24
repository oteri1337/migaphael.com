const express = require("express");
const Controller = require("../middlewares/ProductsController");
const V = require("../middlewares/validators/ProductsValidator");
const P = require("../middlewares/validators/PermissionsValidator");

const router = express.Router();

router.post("/products", P.admin, Controller.create);

router.patch("/products", P.admin, Controller.update);

router.delete("/products", P.admin, Controller.delete);

router.get("/products", Controller.list);

router.get("/products/search/:attr", Controller.search);

router.patch("/products/sync", P.admin, V.sync, Controller.sync);

router.post("/products/image", P.admin, Controller.updateImage);

router.get("/products/:attr", Controller.read);

module.exports = router;
