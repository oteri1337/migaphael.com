const express = require("express");
const V = require("../middlewares/validators/GroupsValidator");
const Controller = require("../middlewares/ParentgroupsController");
const P = require("../middlewares/validators/PermissionsValidator");

const router = express.Router();

router.post("/parentgroups", P.admin, V.create, Controller.create);

router.patch("/parentgroups", P.admin, V.update, Controller.update);

router.get("/parentgroups", Controller.list);

router.delete("/parentgroups", P.admin, Controller.delete);

router.post("/parentgroups/search", Controller.search);

router.get("/parentgroups/:attr", Controller.read);

router.patch("/parentgroups/sync", P.admin, V.sync, Controller.sync);

module.exports = router;
