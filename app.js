const express = require("express")
const dotenv = require("dotenv")
const connectDb = require("./config/db")


//Config
dotenv.config()

//Mongodb connection
connectDb()

//Express App
const app = express()

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
    

//routes
app.get("/", (req, res) => {
    res.send("Hello World")
})








//listen
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running on port: ${port} `)
})