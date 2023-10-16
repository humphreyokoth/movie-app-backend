
const bcrypt = require('bcrypt');

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
    }

  });

  // Compare passwords
  User.prototype.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

  // Generate JWT 
  User.prototype.getJwtToken = function() {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE
    });
  }

  // Hash password before save
  User.beforeCreate(async user => {
    user.password = await bcrypt.hash(user.password, 10);
  });
  
  User.beforeUpdate(async user => {
    if (user.changed('password')) {
      user.password = await bcrypt.hash(user.password, 10);
    }
  });

  return User;

};


