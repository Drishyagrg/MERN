require('dotenv').config()
const express= require('express')
const connectToDatabase = require('./database/index.js')
const app= express()

// Connect to the database
connectToDatabase().catch(err => {
    console.error("Failed to connect to the database:", err);
});

app.get("/",(req,res)=>{
    // console.log(req)
    res.status(200).json({
        message: "This is home page"
    })
})

app.get("/about",(req,res)=>{
    res.json({
        message:"This is about page"
    })
})
app.listen(process.env.PORT,()=>{
    console.log("NodeJs project has started")
})

