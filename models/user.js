
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const config = require("../config/jwt")

module.exports = (sequelize, Sequelize) => {

  const User = sequelize.define('users', {

    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false  
    },

    email: {
      type:Sequelize.STRING, 
      allowNull: false,
      unique: true,
      validate:{
        isEmail: true
      }
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    // resetPasswordToken:Sequelize.STRING,
    // resetPasswordExpire:Sequelize.DATE,
    createdAt:{
      type:Sequelize.DATE,
      default:Sequelize.fn("NOW"),
    }

  });

  User.afterValidate(async function(user){
    if(!user.changed("password")){
      return;
    }
    const salt = await bcrypt.genSalt(15);
    user.password = bcrypt.hashSync(user.password,salt);
  })
  // Compare passwords
  User.prototype.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

  // Return Token
  User.prototype.getJwtToken = function(){
    return jwt.sign({
      where:{
        id:this.id
      }
    },config.secret ,{
      expiresIn:config.JWT_EXPIRES_TIME,
    });
  }
  // // Generate JWT 
  // User.prototype.getResetPasswordToken = function(){
  //   const resetToken = crypto.randomBytes(20).toString("hex");
  //   this.resetPasswordToken = crypto
  //   .createHash("sha256")
  //   .update(resetToken)
  //   .digest("hex");
  //    // Set token expire time
  //   this.resetPasswordExpire = Date.now()+30*60*100;
  //   return resetToken;
  // }
  return User;

};


