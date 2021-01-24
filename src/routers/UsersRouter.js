const express = require("express");
const C = require("../middlewares/UsersController");
const V = require("../middlewares/validators/AuthValidator");
const P = require("../middlewares/validators/PermissionsValidator");

const router = express.Router();

// standard
router.get("/users", P.admin, C.list);

router.post("/users", V.signup, V.exists, C.create);

router.get("/users/:attr", C.read);

router.delete("/users", P.admin, C.delete);

// account create

router.post("/users/accounts", P.user, C.createAccount);

router.delete("/users/accounts", P.user, C.deleteAccount);

// auth
router.post("/users/auth/verifyemail", P.user, C.verifyEmail);

router.post("/users/auth/verifyphone", P.user, C.verifyPhone);

router.post("/users/auth/resendpin", P.user, C.resendPin);

router.post("/users/auth/resendsms", P.user, C.resendSms);

router.post("/users/auth/signin", V.signin, C.signin);

router.get("/users/auth/status", C.status);

router.get("/users/auth/signout", P.user, C.signout);

router.post("/users/auth/password", V.reset, C.resetPassword);

router.post("/users/auth/email", V.reset, C.resetEmail);

router.patch("/users/auth/profile", P.user, C.updateProfile);

router.patch("/users/auth/password", P.user, C.updatePassword);

// web3 routes

router.get("/users/usdt/:attr", C.usdtBalance);

module.exports = router;
