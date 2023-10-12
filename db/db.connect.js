const Sequelize = require("sequelize");
// const dbConfig = require("../config/db.config");
require('dotenv').config();
const seq = () => {
  const sequelize = new Sequelize(    
    process.env.DB,
    process.env.DB_USER,
    process.env.PASSWORD,
    {
      host:process.env.DB_HOST,
      port: 3308,
      dialect: 'mysql',
    }
  );
  sequelize
    .authenticate()
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log("Unable to connect to the database", err);
    });

};
module.exports = seq;

