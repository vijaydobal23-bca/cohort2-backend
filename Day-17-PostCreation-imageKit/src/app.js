const express = require("express");
require("dotenv").config(); 
const cookiePaseer = require("cookie-parser");
  

const authRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookiePaseer());
 
app.get("/" ,(req ,res)=>{
  res.send("Hello server");
});
 
app.use("/api/auth" ,authRouter);
app.use("/api/post" , postRouter);

module.exports = app;