const connectDatabase = require("./config/db.config")
const Sequelize = require("sequelize");

const seq = ()=>{
    const sequelize = new Sequelize(connectDatabase.USER,connectDatabase.PASSWORD,connectDatabase.DB,{
        host:connectDatabase.DB_HOST,
        port:connectDatabase.DB_PORT,
        dialect:'mysql'
    });
    sequelize.authenticate().then(()=>{
        console.log("connected")
    })
}
module.exports = seq;