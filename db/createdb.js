const mysql = require("mysql");
const connectDB = () => {
    var pool = mysql.createPool({
        host:process.env.DB_HOST,
        user:'root',
        password:'',
        database:process.env.DB_NAME,
        port:process.env.DB_PORT,
        dialect:"mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });
    pool.getConnection(function(){
       if (err) throw err
        connection.query('create database movie_app',function(err){
            if (err) throw err
               ;
               console.log('movie_app database created') 
               process.exit();
        })
       } 
    )
}
connectDB();