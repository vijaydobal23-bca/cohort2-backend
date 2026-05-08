const express = require("express");
const app = express();
const noteModel = require("./models/notes.model");
const notesModel = require("./models/notes.model");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server");
});

app.post("/notes", async (req, res) => {
  console.log(req.body);


  const {title , description} = req.body;
  const note = await noteModel.create({
    title,description
  })

  res.status(201).json({
      message:"Note created sucessfully",
      note
    })

});


app.get("/notes" ,async(req ,res)=>{
  const data = await notesModel.find();
  res.status(200).json({
    message:"Data found",
    data
  })
})

module.exports = app;
