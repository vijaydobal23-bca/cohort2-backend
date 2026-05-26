import "dotenv/config.js";
import app from "./src/app.js";
import connectDb from "./src/config/db.js";

connectDb();
app.listen(process.env.PORT,()=>{
  console.log("server started at port ",process.env.PORT)
})     