const db = require("../sequelize");

const connectDatabase = () => {
    db.sequelize.sync().then(()=>{
        console.log('connected to movie_app database')
    })
    .catch(()=>{
        console.error('Unable to connect to the database movie_app')
    })
}

module.exports = connectDatabase;