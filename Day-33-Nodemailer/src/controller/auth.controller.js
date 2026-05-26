import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "../services/mail.service.js";

export async function register(req ,res){

const {username , email , password} = req.body;
const isUserAlreadyExists = await userModel.findOne({
  $or:[
    {email},
    {username}
  ]
})

if(isUserAlreadyExists){
  return res.status(400).json({
    message:"User already Exsts with this email or username",
    success:false,
    err:"user already exists"
  })
}

const user = await userModel.create({
  username,
  email,
  password,
});

await sendEmail({
  to:email,
  subject:"Welcome to perplexity",
  text:`hi ${username} thank you for registration.`,
  html:`<p>Welcome to Perplexity</p>`,
});

return res.status(201).json({
  message: "User registered successfully",
  success: true,
  user: {
    _id: user._id,
    username: user.username,
    email: user.email
  }
});
}