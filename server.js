const express = require("express");
const seq = require("./db/db.connect")
const app = express();
const cors = require("cors");
require('dotenv').config();


// Import all routes
const auth = require('./router/loginRoutes');







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
if(process.env.NODE_ENV !== "PRODUCTION")
require("dotenv").config({path:"env"})
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})