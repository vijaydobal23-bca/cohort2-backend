const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: [true, "Email user already Exists please try another email"]
  },
  password: String,
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
