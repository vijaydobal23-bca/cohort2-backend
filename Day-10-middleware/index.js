const express = require("express");
const myMiddleware = require("./route.middleware");

const app = express(); // also a middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use((req ,res,next)=>{
  console.log("First middleware");
  next();
})
 

app.use((req ,res,next)=>{
  console.log("Second middleware");
  next();
}) 

app.get("/" ,myMiddleware,(req ,res)=>{
  console.log("Now sending the response")
  res.send("Server")
})

app.post("/notes" ,(req ,res)=>{
  console.log(req.body)
res.send(req.body)
})

app.listen(3000, () => {
  console.log("The app is starting");
});
 