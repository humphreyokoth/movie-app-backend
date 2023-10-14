const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');
// const config = require('../config');
module.exports = (sequelize,Sequelize) => {
    const User = sequelize.define('users',{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unique:true
        } ,
        name:{
            type:Sequelize.STRING,
            allowNull:false
        },
        email:{
            type:Sequelize.STRING,
            allowNull:false
        },
        password:{
            type:Sequelize.STRING,
            allowNull:false
        },
        resetPasswordToken: Sequelize.STRING,
        resetPasswordExpire: Sequelize.DATE,
        createdAt: {
            type: Sequelize.DATE,
            default: Sequelize.fn('NOW')
        },
    })
    // Compare user password
    User.prototype.comparePasword = async function(enteredPassword){
        return await bcrypt.compare(enteredPassword,this.password)
    }
    // Return JWT token
    User.prototype.getJwtToken = function(){
        return jwt.sign({where:{id:this.id}},config.secret,{
           expiresIn:config.JWT_EXPIRES_TIME 
        })
    }
    // Generate password reset token
    User.prototype.getResetPasswordToken = function () {
        // Generate token
        const resetToken = crypto.randomBytes(20).toString('hex');

        // Hash and set to resetPasswordToken
        this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

        // Set token expire time
        this.resetPasswordExpire = Date.now() + 30 * 60 * 1000

        return resetToken

    }
    sequelize.sync().then(() => {
        console.log('users table created successfully!');
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
    return User;

}
