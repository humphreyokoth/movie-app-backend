module.exports = (sequelize, Sequelize) => {
  const Image = sequelize.define("images", {
    id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    imageName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imagePath: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return Image;
};
