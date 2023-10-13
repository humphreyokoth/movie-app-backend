const express = require("express");
const seq = require("./db/db.connect")
const app = express();
const cors = require("cors");
require('dotenv').config();



// swagger config
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");

// Import all routes
const auth = require('./routes/auth');






app.use(cors());
// parse requests of content-type - application/json
app.use(express.json())


// Routes
app.use('/login',auth);
// 
app.get('/',(req,res)=>{
    res.json({message:"Movie app api's"})
})

// Sequelize
seq()




// Swagger ui documentation
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));


if(process.env.NODE_ENV !== "PRODUCTION")
require("dotenv").config({path:"env"})
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})