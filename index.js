const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")
const connectDB = require("./db")
const router = require("./router/router")



const app = express()

app.use(express.json())
app.use(cors())

connectDB()

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log("Server is connected")
})


app.use('/api/v1/books',router)




app.use((request,response)=>{
    return response.status(400).json({
        "status":"error",
        "code":"400",
        "message":"Endpoint doesnt exist",
        "error":{
            "detail":"No endpoint like that exist"
        }
    })
})
