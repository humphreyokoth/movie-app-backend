const express = require("express");
const seq = require("./db/db.connect")
const app = express();
const dotenv = require("dotenv");
const route = require("./controllers/authController");

// dotenv.config();
// const cors = require("cors");


app.use(express.json())

seq()
// Setting up config file;
if(process.env.NODE_ENV !== "PRODUCTION")
require("dotenv").config({path:"env"})
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})