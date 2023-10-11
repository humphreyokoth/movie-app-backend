const Sequelize = require("sequelize");

const seq = ()=>{
    const sequelize = new Sequelize("movie_app","root","password",{
        host:'localhost',
        port:3308,
        dialect:'mysql'
    });
    sequelize.authenticate().then(()=>{
        console.log("connected")
    })
}
module.exports = seq;