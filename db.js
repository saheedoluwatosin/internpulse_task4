const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const connectDB = async ()=>{
    await mongoose.connect(`${process.env.MONGO_DB}`)
    .then(()=>{console.log("Db connected")})
}


module.exports = connectDB
