const express = require("express")
const {login} = require("../controllers/admin-controller")


const router = express.Router()

//Admin Login
router.post("/login", login)

//Admin Add Doctor
router.post("/add-doctor", )



module.exports = router