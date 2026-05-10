const express = require("express");

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());


const notes = []

app.get("/" ,(req ,res)=>{
  res.send("Server")
})


app.post("/notes" ,(req ,res)=>{
  console.log(req.body)
  notes.push(req.body);
  res.send(req.body)
})

app.delete("/notes/:index" ,(req ,res)=>{
  console.log(req.params.index);
  notes[req.params.index] = null;
  console.log(notes)
  res.send("Note deletes sucessfull");
})
    

app.get("/notes" ,(req ,res)=>{
  res.send(notes);
})


module.exports = app;