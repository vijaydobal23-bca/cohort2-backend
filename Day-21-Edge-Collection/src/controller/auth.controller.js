const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");
const bcrypt = require("bcryptjs");

async function registerController (req, res){
  const { email, username, password, bio, profileImage } = req.body;
  console.log(req.body);

 const isUserAlreadyExists = await userModel.findOne({
  $or: [
    { username: username },
    { email: email }
  ]
});

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "User Already Exists",
    });
  }

  const hashedPAssword = await bcrypt.hash(password , 10);

  const user = await userModel.create({
    username,
    email,
    bio,
    profileImage,
    password: hashedPAssword,
  });

  const token = jwt.sign(
    {
      id: user._id,
      username:user.username
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token" , token);
  res.status(201).json({
    message:"User Registerd sucesfully",
    user:{
      email:user.email,
      username:user.username,
      bio:user.bio,
      profileImage:user.profileImage
    }
  })
}

async function loginController(req ,res){
  const {username ,email,password} = req.body;
  
  const user = await userModel.findOne({
    $or:[
      {username},
      {email}
    ]
  });

  if(!user){
    res.status(404).json({
      message:"User not Found"
    });
  }

  const isPasswordValid = await bcrypt.compare(password , user.password);

  if(!isPasswordValid){
    return res.status(401).json({
      message:"Password invalid"
    })
  }

  const token = jwt.sign({
    id:user._id,
    username:user.username
    
  },process.env.JWT_SECRET,{expiresIn:"1d"});
  res.cookie("token" ,token);

  res.status(200).json({
    message:"User login sucessfully",
    user:{
      username:user.name,
      email:user.email,
      bio:user.bio,
      profileImage:user.profileImage
    }
  })
}





module.exports = {
  registerController,
  loginController
}