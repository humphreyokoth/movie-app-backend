module.exports = (sequelize,Sequelize)=>{

    const Image = sequelize.define("images",{
       type:{
        id:DataTypes.INTEGER,

       } ,
       name:{
        type:DataTypes.STRING,
       }
    })
    return Image;
}