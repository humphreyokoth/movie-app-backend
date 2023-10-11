const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config()

const { User } = require("../models/usermodel");

async function login(req, res) {
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
module.exports = {
  login,
};
