const userModel = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({ email });

    if (isUserAlreadyExists) {
      return res.status(401).json({
        message: "User already Exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
    );

    res.cookie("token", token);
    res.status(201).json({
      message: "Register sucessfull",
      token,
    });
  } catch (error) {
    console.log(error);
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }

  const passwordMatched = await bcrypt.compare(password, user.password);
  if (!passwordMatched) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);
  res.status(200).json({
    message: "Login sucessfull",
    user,
    token,
  });
}


function logout(req, res) {
  const token = req.cookie?.token;

  if (!token) {
    return res.status(401).json({
      message: "Token not found"
    });
  }

  res.clearCookie("token");

  return res.status(200).json({
    message: "Logged out successfully"
  });
}
module.exports = {
  registerUser,
  login,
  logout
};
