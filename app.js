const express= require('express')
const app= express()

app.get("/",(req,res)=>{
    // console.log(req)
    res.json({
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