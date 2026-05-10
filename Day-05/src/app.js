const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const notes = [];

app.post("/notes",(req ,res)=>{
  notes.push(req.body);
  res.status(201).json({
    message:"Note creates sucessfully",
    notes
  })
})

app.get("/notes",(req ,res)=>{
  res.status(200).json({
    notes
  })
})

app.delete("/notes/:id" ,(req ,res)=>{
  delete notes[req.params.id];

  res.status(204).json({
    message:"Note deleted sucessfully"
  })
})

app.patch("/notes/:index",(req ,res)=>{
  console.log(req.params.index)
  console.log(req.body);
  notes[req.params.index].address = req.body.address;

  res.status(200).json({
    message:"note updates sucessfully"
  })
}) 
  

module.exports = app;