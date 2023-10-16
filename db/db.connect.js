// const Sequelize = require("sequelize");
// const dbConfig = require("../config/db.config");
// require('dotenv').config();
// const seq = () => {
//   const sequelize = new Sequelize(      
//     dbConfig.dialect,
//     dbConfig.database,
//     dbConfig.username,    
//     dbConfig.password,
//     // dbConfig.port,
//     {
//      host:dbConfig.host,
//      port:dbConfig.port,
//       pool: {
//         max:dbConfig.pool.max,
//         min:dbConfig.pool.min,
//         acquire:dbConfig.pool.acquire,
//         idle:dbConfig.pool.idle
//       }
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

