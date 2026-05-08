const mongoose  = require("mongoose");
function connectDb(){
  mongoose.connect("mongodb://localhost:27017/day-7").then(()=>{
    console.log("Connected with database sucessfully");
  }).catch((err)=>{
    console.log("error occurred");
  })
}

module.exports = connectDb;