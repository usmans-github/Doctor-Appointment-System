const express = require("express")
const {login, addDoctor, getStats, updateAppointments} = require("../controllers/admin-controller")
const  upload = require("../middlewares/multerMiddleware.js")
const authAdmin = require("../middlewares/authAdmin.js")



const router = express.Router()

//Admin Login
router.post("/login", login)

//Admin Add Doctor
router.post("/add-doctor",  authAdmin, upload.single("file"),  addDoctor)

//Get All Data Stats
router.get("/getStats",  authAdmin, getStats)

//Api to Update the appointments
router.post("/update-appointment", authAdmin, updateAppointments)









module.exports = router