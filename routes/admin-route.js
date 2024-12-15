const express = require("express")
const {login, addDoctor} = require("../controllers/admin-controller")


const router = express.Router()

//Admin Login
router.post("/login", login)

//Admin Add Doctor
router.post("/add-doctor",addDoctor )



module.exports = router