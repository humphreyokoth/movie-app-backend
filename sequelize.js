const Sequelize = require("sequelize");
const config = require("./config/db.config");
require('dotenv').config();

const sequelize = new Sequelize(   
  
  config.database,
  config.username,
  config.password,    
  { 
    host:config.host,
    dialect:config.dialect,
    port:config.port,  
    pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./models/user")(sequelize, Sequelize);
db.movie = require("./models/movie")(sequelize,Sequelize);
db.image = require("./models/image")(sequelize,Sequelize);


// Define associations
db.user.hasMany(db.movie);
db.movie.belongsTo(db.user);
db.movie.hasMany(db.image);
db.image.belongsTo(db.movie);

db.movie.hasMany(db.image, { foreignKey: 'movieId' });
db.image.belongsTo(db.movie, { foreignKey: 'movieId' });


sequelize
.authenticate()
.then(() => {
  console.log("Database connected");
})
.catch((err) => {
  console.log("Unable to connect to the database", err);
});



module.exports = db;