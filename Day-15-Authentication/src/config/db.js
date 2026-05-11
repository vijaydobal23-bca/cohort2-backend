const mongoose = require("mongoose");

async function connectDb(){
  try {
    await mongoose.connect(process.env.MONGO_URI);  
    console.log("Connects with database");
  } catch (error) {
    console.log(error.message);
    }
}

module.exports = connectDb;