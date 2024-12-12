const express = require("express")
const dotenv = require("dotenv")
const connectDb = require("./config/db")
const cors = require("cors")
const cookieParser = require("cookie-parser")

//Express App
const app = express()

//Config
dotenv.config()


//Mongodb connection
connectDb()





//Middlewares
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
    

//routes
app.use("/api/user", require("./routes/user-route"))


    
app.get("/", (req, res) => {
    res.send("Hello World") 
})






//listen
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running on port: ${port} `)
})