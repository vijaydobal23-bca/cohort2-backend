const express = require("express");
const authRouter = express.Router();
const authController = require("../controller/auth.controller");

authRouter.post("/register" , authController.registerUser);
authRouter.post("/login" , authController.login);
authRouter.get("/logout" ,authController.logout);
module.exports = authRouter;