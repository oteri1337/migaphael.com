const express = require("express");
const Controller = require("../middlewares/GroupsController");
const V = require("../middlewares/validators/GroupsValidator");
const P = require("../middlewares/validators/PermissionsValidator");

const router = express.Router();

router.post("/groups", P.admin, V.create, Controller.create);

router.patch("/groups", P.admin, V.update, Controller.update);

router.get("/groups", Controller.list);

router.delete("/groups", P.admin, Controller.delete);

router.post("/groups/search", Controller.search);

router.get("/groups/:attr", Controller.read);

module.exports = router;
