const express = require("express");
const authRouter = express.Router();
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const crypto = require('crypto');


authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const isUserAlreadyExists = await userModel.findOne({email});

  if(isUserAlreadyExists){
    return res.status(401).json({
      messagae:"the user is already exists"
    })
  }

  const hash = crypto.createHash("md5").update(password).digest("hex");

  const user = await userModel.create({
    email,password:hash,name
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


authRouter.post("/protected",(req ,res)=>{
  const token = req.cookies;
  res.status(201).json({
    message:"Cookie found",
    token
  })
})

// controllers
authRouter.post("/login" ,async(req ,res)=>{
  const{email,password} = req.body;

  const user = await userModel.findOne({email});

  if(!user){
    return res.status(401).json({
      message:"Invalid email or password",
    })
  }

  const isPasswordMatched = await user.password === password;

  if(!isPasswordMatched){
    return res.status(401).json({
      message:"Invalid email or Password",
    })
  }

  const token = jwt.sign({
    id:user._id,
  },process.env.JWT_SECRET); 

  res.status(200).json({
    message:"Login sucess",
    token,
    user
  })
})

 



module.exports = authRouter;
