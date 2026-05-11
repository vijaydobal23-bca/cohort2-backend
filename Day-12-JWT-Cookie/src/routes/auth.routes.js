const express = require("express");
const authRouter = express.Router();
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");


authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const isUserAlreadyExists = await userModel.findOne({email});

  if(isUserAlreadyExists){
    return res.status(401).json({
      messagae:"the user is already exists"
    })
  }
  const user = await userModel.create({
    email,password,name
  });

  const token = jwt.sign({
    id:user._id,
  },process.env.JWT_SECRET);
  res.cookie("token" , token);

  res.status(201).json({
    message:"User registerd",
    user,
    token
  });

  
});





module.exports = authRouter;
