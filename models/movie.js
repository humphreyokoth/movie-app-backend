module.exports = (sequelize, Sequelize) => {
  const Movie = sequelize.define("movie", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    movieName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    genre: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    plot: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    releaseDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    notes: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    ratings:{
      type: Sequelize.DECIMAL,
      allowNull: true,
    },
    image: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  });
  return Movie;
};

