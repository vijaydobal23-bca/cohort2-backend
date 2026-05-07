const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app  = express();// creting instance of a server

app.get("/" ,(req ,res)=>{
  return res.status(200).json({
    message:"Hello responce",
    id:"1234"
  })
}) 

app.get("/about",(req ,res)=>{
  res.send("This is about page")
})



const port = 3000;
app.listen(process.env.port , ()=>{
  console.log("Server is starting")
})