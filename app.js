const express= require('express')
const connectToDatabase = require('./database')
const app= express()

connectToDatabase()

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
app.listen(3000,()=>{
    console.log("NodeJs project has started")
})

// mongodb+srv://drishyagurung:<db_password>@cluster0.xxlfp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 