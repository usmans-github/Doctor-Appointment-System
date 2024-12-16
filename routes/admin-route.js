const express = require("express")
const {login, addDoctor, getStats} = require("../controllers/admin-controller")
const  upload = require("../middlewares/multerMiddleware.js")



const router = express.Router()

//Admin Login
router.post("/login", login)

//Admin Add Doctor
// router.post("/add-doctor", upload.single("image"),  addDoctor)


//Admin Get Stats
router.get("/stats", getStats)

//Admin Auth
// router.post("/getAdminData", authMiddleware,  authController)

module.exports = router