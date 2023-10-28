module.exports = (sequelize, Sequelize) => {
  const Image = sequelize.define("images", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    url: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    movieId: {
      type: Sequelize.INTEGER,
      allowNull: true, 
    },
  });
  return Image;
};
