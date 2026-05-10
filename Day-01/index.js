const catMe = require("cat-me");
const express = require('express');
console.log(catMe())

//programming a new Server

const app = express(); //creating a server

app.get("/" ,(req ,res)=>{
  res.send("The server is Starting")
})
app.listen(3000 , ()=>{
  console.log("<h1>Server is starting</h1>")
})


