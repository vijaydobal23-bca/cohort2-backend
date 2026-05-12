function getController(req ,res){
  res.render("notes");
}

function postController(req ,res){
  const notes = req.body;
  res.render("data" , {notes});
  
}

module.exports = {
  getController,
  postController
}