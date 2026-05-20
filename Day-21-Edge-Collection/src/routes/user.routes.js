const express = require("express");
const userRouter = express.Router();
const userController = require("../controller/user.controller");
const identifyUser = require("../middleware/auth.middleware");
userRouter.post("/follow/:username" , identifyUser,  userController.followerController );

module.exports = userRouter;