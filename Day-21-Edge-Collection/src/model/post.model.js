const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  caption:{
    type:String,
    default:""
  },

  imgUrl:{
    type:String,
    required:[true , "Img url is required for creating a post"]
  },

  user:{
    ref:"users",
    type:mongoose.Schema.Types.ObjectId,
    required:[true,"User id is Required"]
  }
})


const postModel = mongoose.model("posts" , postSchema);
module.exports = postModel;