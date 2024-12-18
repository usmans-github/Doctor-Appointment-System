const express = require("express")
const {login, addDoctor} = require("../controllers/admin-controller")
const  upload = require("../middlewares/multerMiddleware.js")
const authAdmin = require("../middlewares/authAdmin.js")



const router = express.Router()

//Admin Login
router.post("/login", login)

//Admin Add Doctor
router.post("/add-doctor", authAdmin, upload.single("file"),  addDoctor)



//Admin Auth
router.post("/getAdminData", authAdmin,  )




module.exports = router