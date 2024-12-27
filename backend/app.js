const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

//Express App
const app = express();

//Config
dotenv.config();

//Mongodb connection
connectDb();

//Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));



//user routes
app.use("/api/user", require("./routes/user-route"));

//admin routes
app.use("/api/admin", require("./routes/admin-route"));


 
app.get("/",  (req, res) => {
   return  res.json(200).send("Hello from the server!");
  })






const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port} `);
});
