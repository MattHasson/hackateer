const express = require("express");
const app = express();
const cors = require("cors");
const hackateers = require("./controllers/hackateer")
require("dotenv").config()

app.use(cors());
app.use(express.json())
app.use(hackateers)
app.listen(process.env.PORT,()=>{
   console.log("server is running on "+process.env.PORT) 
});
