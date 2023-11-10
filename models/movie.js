module.exports = (sequelize, Sequelize) => {
  const Movie = sequelize.define("movies", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    imageUrl:{
      type:Sequelize.STRING,
      allowNull: true,
    },
    title: {
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
      type: Sequelize.JSON,
      allowNull: true,
    }
  });
  return Movie;
};

