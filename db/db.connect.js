const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config");
require('dotenv').config();
const seq = () => {
  const sequelize = new Sequelize(    
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
      host:dbConfig.host,
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

