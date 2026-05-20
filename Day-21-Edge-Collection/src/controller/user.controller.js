const followModel = require("../model/folower.model");
const userModel = require("../model/user.model");

async function followerController(req ,res){
  const followerUsername = req.user.username ;
  const followeeUsername = req.params.username;

  const isFolloweeExists = userModel.findOne({username:followeeUsername});
  if(!isFolloweeExists){
    return res.status(400).json({
      message:"User is not exists",
    })
  }

  const foloweRecords = followModel.create({
    follower:followerUsername,
    folowee:followeeUsername
  });

  res.status(201).json({
    message:"You are following to "+followeeUsername,
  })


}

module.exports = {
  followerController
}