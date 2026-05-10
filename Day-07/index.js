const express = require("express");
const app = require("./src/app");
const connectDb = require("./src/config/db");

connectDb();
app.listen(3000, () => {
  console.log("The app is starting");
});
 