const express = require("express");
const multer = require("multer");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// Fixed here
const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.send("Server");
});

app.post("/upload", upload.single("image"), (req, res) => {
  const data = req.file;

  res.status(201).json({
    message: "File Received",
    data
  });
});

app.listen(3000, () => {
  console.log("The app is starting");
});