const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config()

const { User } = require("../models/user");

exports.login = async(req, res)=>{
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
    res.status(401).send({ success: false, error: error.message });
  }
}
// Register a user   => /api/v1/getUser
exports.getUser = async (req,res) =>{
  const user = await User.findByPk(req.user.id);
  return res.json(user);
}
