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







app.use(express.json())
app.use(cors());

// Routes
app.use('/login',auth);

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