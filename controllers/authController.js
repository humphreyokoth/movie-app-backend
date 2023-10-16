
// const Op = db.Sequelize.Op;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const db = require("../sequelize");
const User = db.user;


exports.registerUser = async (req,res) => {
  try {
    const {name,email,password} = req.body;
    const user = await User.create({
     name,
     email,
     password,
  
    });
    return res.json({
      message: "Registered successfully",
      user: user,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
// Login  of user 
exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    console.log(user);
    console.log(req.body.password);
    if (user) {
      const matchPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!matchPassword) throw new Error("Invalid credentials");

      const userObj = user.toJSON();
      delete userObj.password;
      const payload = {
        userId: user.id,
      };
      const token = jwt.sign(payload, proces.env.SECRET_KEY);

      res.json({ success: true, token: token, userId: user.id });
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(401).send({ message: false, error: error.message });
  }
};
// Register a user   => /api/v1/getUser
exports.getUser = async (req, res) => {
  const user = await User.findByPk(req.user.id);
  return res.json(user);
};
