const blacklistmodel = require("../model/blacklist.model");
const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
const redis = require("../config/cache");

async function authUser(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Token not provided",
    });
  }

  const isTokenBlacklisted = redis.get(token);
  if(isTokenBlacklisted){
    return res.status(401).json({
      message:"Invalid token - blacklisted"
    })
  }

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
  }
}




module.exports  = {
  authUser
}