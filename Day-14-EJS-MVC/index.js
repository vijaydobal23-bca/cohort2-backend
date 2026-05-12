const express = require("express");
const router = require("./routes/app.routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine" ,"ejs");
 



app.get("/" ,(req ,res)=>{
  res.send("Server")
})

app.use(router);

app.listen(3000, () => {
  console.log("The app is starting");
});
 