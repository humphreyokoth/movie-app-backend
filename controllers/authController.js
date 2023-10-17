// const Op = db.Sequelize.Op;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");
require("dotenv").config();
const db = require("../sequelize");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

const loginToken = require("../utils/verifyLogin")
const User = db.user;

exports.registerUser = catchAsyncErrors(async (req, res) => {

    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
    });
    return res.json({
      message: "Registered successfully",
      user: user,
    });
 
});
// Login  of user
exports.login = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email & password", 400));
  }
  // Finding user in database
  const user = await User.findOne({ where: { email: req.body.email } });
  console.log(user);
  console.log(req.body.password);
  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  const isPasswordMatched = bcrypt.compareSync(
    req.body.password,
    user.password
  );

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password",401));
  }
  loginToken(user, 200, res);

});

// Register a user   => /api/v1/getUser
exports.getUser = async (req, res) => {
  const user = await User.findByPk(req.user.id);
  return res.json(user);
};
