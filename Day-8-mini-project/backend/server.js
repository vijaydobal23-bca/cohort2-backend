const connectDb = require("./src/config/db");
const app = require("./src/app");
const express = require("express");
const cors = require('cors')

require("dotenv").config(); 
connectDb();



app.listen(3000 , ()=>{
  console.log("Server is starting");
})   