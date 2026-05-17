 const multer = require("multer");
 const ImageKit = require("@imagekit/nodejs/index.js");
 const { toFile } = require("@imagekit/nodejs/index.js");
const jwt = require("jsonwebtoken");
const postModel = require("../model/post.model")

const imageKit = ImageKit({
  privatekey:process.env.IMAGEKIT_PRICVATE_KEY
});

 async function createPostController(req ,res){
  
  const file = await imageKit.files.upload({
    file: await toFile( (req.file.buffer) ,"file"),
    fileName:"Practice File",
    folder:"Practice-image-kit"
  });

  const post = await postModel.create({
    caption:req.body.caption,
    imgUrl :file.url,
    user:req.user.id
  })


  res.status(201).json({
    message:"Post created sucessfullly",
    post
  })

 }

 module.exports = {
  createPostController
 }