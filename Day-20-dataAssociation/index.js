const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./model/user.model");
const postModel = require("./model/post.model");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function connectDb() {
  await mongoose.connect("mongodb://localhost:27017/Day-20");
  console.log("Connrecte to database");
}

connectDb();

app.get("/", (req, res) => {
  res.send("Server");
});

app.post("/user", async (req, res) => {
  try {
    const { username, age, address } = req.body;

    const user = await userModel.create({
      username,
      age,
      address,
    });

    res.status(201).json({
      message: "User created",
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

app.post("/post", async(req, res) => {
const {postname , discription ,userId} = req.body;
const post = await postModel.create({
  postname,userId,discription
});

 const user = await userModel.findById(userId);

  user.posts.push(post._id);

    // save updated user
    await user.save();

    res.status(201).json({
      message: "Post created",
      post
    });

});

app.listen(3000, () => {
  console.log("The app is starting");
});
