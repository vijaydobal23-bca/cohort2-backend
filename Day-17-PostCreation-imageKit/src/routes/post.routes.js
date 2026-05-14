const express = require("express");
const postRouter = express.Router();
const postController = require("../controller/post.conroller");
const multer = require("multer");
const identifyUser = require("../middleware/auth.middleware");


const upload = multer({
  storage: multer.memoryStorage(),
});


postRouter.post("/" ,upload.single("image"), identifyUser, postController.createPostController);

module.exports = postRouter;
 
