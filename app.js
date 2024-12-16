const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const statsModel = require("./models/stats-model");

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



//routes
app.use("/api/user", require("./routes/user-route"));

//admin routes
app.use("/api/admin", require("./routes/admin-route"));


 
app.get("/",  async(req, res) => {
  res.send("Hello World!");
  })






const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port} `);
});
