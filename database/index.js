const mongoose = require('mongoose')


async function connectToDatabase(){
    await mongoose.connect("mongodb+srv://drishyagurung:nanana@cluster0.xxlfp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Database connected successfully")

}

module.exports = connectToDatabase