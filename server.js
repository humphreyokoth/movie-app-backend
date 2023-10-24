const express = require("express");
const db = require("./sequelize")
const app = express();
const cors = require("cors");
require('dotenv').config();
// swagger config
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");





// Import all routes
const auth = require('./routes/auth');
const movieRoute =  require('./routes/movie');
const addmovieImage  = require('./routes/image');







app.use(cors());
// parse requests of content-type - application/json
app.use(express.json())
app.use(express.urlencoded({extended:true}));

// Routes
app.use('/api/v1/',auth);
app.use('/api/v1/',movieRoute);
app.use('/api/v1/',addmovieImage);

// 
app.get('/api/v1/',(req,res)=>{
    res.json({message:"Movie app api's"})
})

// Sequelize
db.sequelize.sync()




// Swagger ui documentation
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));


if(process.env.NODE_ENV !== "PRODUCTION")
require("dotenv").config({path:"env"})
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})