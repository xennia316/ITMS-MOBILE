const express = require("express");
const { SignUp, SignIn } = require("../controllers/Auth.controller");
const AuthRouter = express.Router();

AuthRouter.post("/signup", SignUp);
AuthRouter.post("/sign-in", SignIn);

module.exports = AuthRouter;
