const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
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
app.use(express.static("../upload"));

//routes
app.use("/api/user", require("./routes/user-route"));

//admin routes
app.use("/api/admin", require("./routes/admin-route"));


 
app.get("/",  async(req, res) => {
  res.send("Hello World!");
  })



// Temporary Route
// app.get("/", async (req, res) => {
//         const password = "superadmin";
//         bcrypt.genSalt(10, function (err, salt) {
//             bcrypt.hash(password, salt, async function (err, hash) {
//             // Store hash in your password DB.

//                     const superadmin = await adminModel.create({
//                         name: "",
//                         email: "",
//                         password: hash,
//                     });
//                     superadmin.save()
//                     res.status(201).send({
//                         success: true,
//                         message: "",
//                         data: superadmin,
//                       });
//             });
//         });
// });




const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port} `);
});
