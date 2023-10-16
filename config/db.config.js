require('dotenv').config();
module.exports = {
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port:3308,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
// const Sequelize = require("sequelize");
// require("dotenv").config();
// const seq = () => {
//   const sequelize = new Sequelize(
//     process.env.dialect,
//     process.env.DB_DATABASE,
//     process.env.DB_USERNAME,
//     process.env.DB_PASSWORD,
//     process.env.DB_PORT,
//     {
//       host: process.env.DB_HOST,   
//       pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000,
//       },
//     }
//   );
//   sequelize
//     .authenticate()
//     .then(() => {
//       console.log("Database connected");
//     })
//     .catch((err) => {
//       console.log("Unable to connect to the database", err);
//     });
// };
// module.exports = seq;
