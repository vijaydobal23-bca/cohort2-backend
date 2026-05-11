const expres =require("express");
const router = expres.Router();


router.get("/notes" , (req ,res)=>{
  res.send("Notes are here");
})


router.post("/notes" ,(req ,res)=>{
  const {title , discription} = req.body;
});

module.exports = router;