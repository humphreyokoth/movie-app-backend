const express = require("express");
const seq = require("./db/db.connect")
const app = express();
const cors = require("cors");
require('dotenv').config();



// swagger config
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");

// Import all routes
const auth = require('./router/auth');







app.use(express.json())
app.use(cors());

// Routes
app.use('/login',auth);

// Sequelize
seq()


// app.use('/dashboard', dashboardRoute);
// app.use('/employee', employeeRoutes);
// app.use('/login', loginRoutes);
// app.use('/register', registerRoutes);
// app.use('/registertruck', registerTruckRoutes);
// app.use('/assigntrucks', assignTruckRoutes);
// app.use('/earnings', earningRoutes);
// app.use('/order', orderRoutes);
// Setting up config file;

// Swagger ui documentation
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));


if(process.env.NODE_ENV !== "PRODUCTION")
require("dotenv").config({path:"env"})
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})