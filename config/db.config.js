module.exports = {
  HOST: "localhost",
  USER: "movie",
  PASSWORD: "",
  DB: movie,
  DB_PORT: 3308,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
