const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  postname: String,
  description: String,

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
});

const postModel = mongoose.model("post", postSchema);

module.exports = postModel;