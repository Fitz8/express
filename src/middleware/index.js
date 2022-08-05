const bcrypt = require("bcryptjs");
const User = require("../user/model");
const jwt = require("jsonwebtoken");

exports.hashPass = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    next();
    //take a password out of the body, hash the password and then return it to the body
  } catch (error) {
    console.log(error);
    res.send({ err: error });
  }
};

exports.comparePass = async (req, res, next) => {
  try {
    req.user = await User.findOne({ username: req.body.username });
    if (req.user && await bcrypt.compare(req.body.password, req.user.password)) {
      next();
    } else {
      throw new Error("Incorrect username or password");
    }
  } catch (error) {
    console.log(error);
    res.send({ err: error });
  }
};


exports.tokenCheck = async (req, res, next) => {
  try {
    console.log("token check")
    const token = req.header("Authorization");
    const decodedToken = await jwt.verify(token, process.env.SECRET);
    const user = await User.findById(decodedToken._id);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error });
  }
};
