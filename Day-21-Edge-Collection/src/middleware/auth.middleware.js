const jwt = require('jsonwebtoken');

async function identifyUser(req ,res ,next){
  const token = req.cookies.token;
  console.log(token);
    if(!token){
       return res.status(401).json({
        message:"An authorized access"
      })
    }
  
    let decoded;
    try {
      decoded = jwt.verify(token , process.env.JWT_SECRET);
    } catch (error) {
      return res.status(401).json({
        messagae:"User is not Autherized",
      })
    }
  
    req.user = decoded;
    next();
}

module.exports = identifyUser;