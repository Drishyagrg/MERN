require('dotenv').config()
const express= require('express')
const connectToDatabase = require('./database/index.js')

const app= express()
app.use(express.json())

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

app.post("/blog",(req,res)=>{
    console.log(req.body)
    res.status(200).json({
        message : "Blog api hit successfully"
    })
})

app.listen(process.env.PORT,()=>{
    console.log("NodeJs project has started")
})

