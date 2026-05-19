const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username:String,
  age:String,
  address:String,
 posts: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }
]
});


const userModel = mongoose.model("user",userSchema);
module.exports = userModel;