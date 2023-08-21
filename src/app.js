const express = require("express");
const path = require("path")
const  connectdb = require("./db/conn");

const dotenv = require("dotenv").config()
const app = express(); 
const hbs = require("hbs")
const userRoutes = require('../controllers/userRoutes')
const PORT = process.env.PORT || 8000;

connectdb() 
app.use(express.json());
app.use(express.urlencoded({extended:false}))
const templates_path = path.join(__dirname,"../Templates/Views")
app.set("view engine", "hbs")

app.use(express.static(templates_path))

app.set("views", templates_path)

app.use('/', userRoutes);






app.listen(PORT, ()=>{
    console.log("server up and running on port", PORT)
})