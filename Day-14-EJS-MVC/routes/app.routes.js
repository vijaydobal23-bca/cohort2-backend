const express = require("express");
const appRoutes = express.Router();
const appController = require("../controller/app.controller");


appRoutes.get("/notes" ,appController.getController);
appRoutes.post("/notes" ,appController.postController);

module.exports = appRoutes;