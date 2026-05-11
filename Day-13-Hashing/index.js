 
const app = require("./src/app");
const connectDb = require("./src/config/db");
require("dotenv").config();
connectDb()

app.listen(3000, () => {
  console.log("The app is starting");
});   
 