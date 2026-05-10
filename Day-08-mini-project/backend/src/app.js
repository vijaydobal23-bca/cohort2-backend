const express = require("express");
const noteModel = require("./models/note.model");
const app = express();
const cors = require("cors"); 
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));
app.use(cors());



app.post("/api/notes",async(req ,res)=>{

  const {title , discription} = req.body;
  const notes = await noteModel.create({
    title,
    discription
  })

  res.status(201).json({
    message:"Notes created sucessfully",
    notes
  })
})


app.get("/api/notes" , async(req ,res)=>{
  const notes = await noteModel.find();
  res.status(200).json({
    message:"notes fetched sucessfully",
    notes
  })
})

app.delete("/api/notes/:id",async(req ,res)=>{
  const id = req.params.id;
  await noteModel.findByIdAndDelete(id);

  res.status(200).json({
    message:"Note deleted"
  })
})

app.patch("/api/notes/:id" ,async(req ,res)=>{
  const id = req.params.id;
  const {discription} = req.body;
  await noteModel.findByIdAndUpdate(id , {discription});


  res.status(200).json({
    message:"Note updates sucessfully"
  })
})

app.use("*name" ,(req ,res)=>{
  res.sendFile(path.join(__dirname,"../public/index.html"));
})


module.exports = app;