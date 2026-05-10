function myMiddleware(req ,res ,next){
  console.log("Route middleware");
  next();
}

module.exports = myMiddleware;