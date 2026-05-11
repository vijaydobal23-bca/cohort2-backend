const express = require("express");
const app = express();
const authRouter = require("./routes/auth.routes")
require("dotenv").config();
const cookieParser = require("cookie-parser");




app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get("/" ,(req ,res)=>{
  res.send("App is here");
})

app.use("/api/auth" , authRouter);


module.exports = app;